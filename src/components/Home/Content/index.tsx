import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { fetchInvoices } from '../../../state/invoice/invoiceSlice'

import { InvoiceObj } from '../../../types/interfaces'

const Content = () => {
    const invoice = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    return (
        <div>
            {invoice.loading && <h2>Loading</h2>}
            {!invoice.loading && invoice.error ? (
                <h2>Error: {invoice.error}</h2>
            ) : null}
            {!invoice.loading &&
                invoice.invoices.length &&
                invoice.invoices.map((singleInvoice: InvoiceObj) => (
                    <div key={singleInvoice.id}>
                        <p>#{singleInvoice.id}</p>
                        <p>{singleInvoice.paymentDue}</p>
                        <p>{singleInvoice.clientName}</p>
                        <p>{singleInvoice.total}</p>
                        <p>{singleInvoice.status}</p>
                    </div>
                ))}
        </div>
    )
}

export default Content
