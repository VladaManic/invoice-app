import { useAppSelector } from '../../../state/hooks'

import { InvoiceObj } from '../../../types/interfaces'

const Content = () => {
    const invoice = useAppSelector((state) => state.invoice)

    return (
        <div>
            {invoice.loading && <h2>Loading</h2>}
            {!invoice.loading && invoice.error && (
                <h2>Error: {invoice.error}</h2>
            )}
            {!invoice.loading && invoice.invoices.length
                ? invoice.invoices.map((singleInvoice: InvoiceObj) => (
                      <div key={singleInvoice.id}>
                          <p>#{singleInvoice.id}</p>
                          <p>{singleInvoice.paymentDue}</p>
                          <p>{singleInvoice.clientName}</p>
                          <p>{singleInvoice.total}</p>
                          <p>{singleInvoice.status}</p>
                      </div>
                  ))
                : null}
        </div>
    )
}

export default Content
