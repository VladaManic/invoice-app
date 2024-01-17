import SingleInvoice from '../SingleInvoice'
import EmptyInvoices from '../EmptyInvoices'

import { InvoiceObj, InitialStateObj } from '../../../types/interfaces'
interface Props {
    invoice: InitialStateObj
}

const Content = ({ invoice }: Props) => {
    return (
        <>
            {invoice.invoices.length !== 0 ? (
                <div>
                    {invoice.invoices.map((singleInvoice: InvoiceObj) => (
                        <SingleInvoice
                            key={singleInvoice.id}
                            invoice={singleInvoice}
                        />
                    ))}
                </div>
            ) : (
                <EmptyInvoices />
            )}
        </>
    )
}

export default Content
