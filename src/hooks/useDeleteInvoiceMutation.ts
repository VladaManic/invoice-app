import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppDispatch } from '../state/hooks'
import { deleteSingleInvoice } from '../state/invoice/invoiceSlice'

const useDeleteInvoiceMutation = (status: string) => {
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            try {
                await dispatch(deleteSingleInvoice(id))
                return id
            } catch (error) {
                console.error('Error deleting invoice:', error)
                throw error
            }
        },
        onSuccess: (id) => {
            // Update the cache for all invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices'],
            })
            // Update the cache for filtered invoices WITH re-fetch
            queryClient.invalidateQueries({
                queryKey: ['Invoices: ' + status],
            })
            // Delete the cache for the single invoice
            queryClient.setQueryData(['Single invoice: ' + id], null)
            console.log(
                id +
                    ' cache data is: ' +
                    queryClient.getQueryData(['Single invoice: ' + id])
            )
        },
    })
}

export default useDeleteInvoiceMutation
