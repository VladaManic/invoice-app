import { useAppSelector } from '../../../state/hooks'

import SingleInvoice from '../SingleInvoice'

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
                      <SingleInvoice
                          key={singleInvoice.id}
                          invoice={singleInvoice}
                      />
                  ))
                : null}
        </div>
    )
}

export default Content
