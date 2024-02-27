import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAppDispatch } from '../state/hooks'
import { createInvoice } from '../state/invoice/invoiceSlice'
import { InvoiceObj } from '../types/interfaces'

const useCreateInvoiceMutation = () => {
    const dispatch = useAppDispatch()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (newObj: InvoiceObj) => {
            try {
                const createdInvoice = await dispatch(createInvoice(newObj))

                if (createdInvoice) {
                    queryClient.invalidateQueries()
                }

                return createdInvoice
            } catch (error) {
                console.error('Error creating invoice:', error)
                throw error
            }
        },
        onError: (error) => {
            console.error('Error during mutation:', error)
        },
    })
}

export default useCreateInvoiceMutation
