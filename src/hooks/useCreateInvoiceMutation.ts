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
                return createdInvoice
            } catch (error) {
                console.error('Error creating invoice:', error)
                throw error
            }
        },
        onSuccess: (createdInvoice) => {
            const key = ['Invoices']
            // Update the cache
            queryClient.setQueryData(
                key,
                (prevData: { payload: InvoiceObj[] } | undefined) => {
                    const newData = prevData
                        ? [...prevData.payload, createdInvoice.payload]
                        : [createdInvoice.payload]
                    return { payload: newData }
                }
            )
        },
    })
}

export default useCreateInvoiceMutation
