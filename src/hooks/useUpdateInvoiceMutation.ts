import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppDispatch } from '../state/hooks'
import { updateInvoice, updateToPaid } from '../state/invoice/invoiceSlice'
import { InvoiceObj } from '../types/interfaces'

const useUpdateInvoiceMutation = (type: boolean) => {
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (invoiceObj: InvoiceObj | null) => {
            try {
                const updatedInvoice = type
                    ? // Updateing status from pending to paid
                      await dispatch(updateToPaid(invoiceObj))
                    : // Updateing whole invoice
                      await dispatch(updateInvoice(invoiceObj))
                return updatedInvoice
            } catch (error) {
                console.error('Error updating invoice:', error)
                throw error
            }
        },
        onSuccess: (updatedInvoice) => {
            // Update the cache for single invoice WITHOUT re-fetch
            queryClient.setQueryData(
                ['Single invoice: ' + updatedInvoice!.payload.id],
                updatedInvoice
            )
            // Update the cache for all invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices'],
            })
            // Update the cache for filtered invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices: ' + updatedInvoice!.payload.status],
            })
        },
    })
}

export default useUpdateInvoiceMutation