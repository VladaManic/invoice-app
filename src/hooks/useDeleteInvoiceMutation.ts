import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppDispatch } from '../state/hooks'
import { deleteSingleInvoice } from '../state/invoice/invoiceSlice'

const useDeleteInvoiceMutation = (status: string) => {
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            try {
                const deletedInvoice = await dispatch(deleteSingleInvoice(id))
                return deletedInvoice
            } catch (error) {
                console.error('Error deleting invoice:', error)
                throw error
            }
        },
        onSuccess: (deletedInvoice) => {
            console.log(deletedInvoice.payload)
            // Update the cache for all invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices'],
            })
            // Update the cache for filtered invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices: ' + status],
            })
        },
    })
}

export default useDeleteInvoiceMutation
