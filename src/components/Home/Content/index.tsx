import SingleInvoice from '../SingleInvoice'

import { InvoiceObj, InitialStateObj } from '../../../types/interfaces'

interface Props {
    invoice: InitialStateObj
}

const Content = ({ invoice }: Props) => {
    return (
        <div>
            {invoice.invoices.map((singleInvoice: InvoiceObj) => (
                <SingleInvoice key={singleInvoice.id} invoice={singleInvoice} />
            ))}
        </div>
    )
}

export default Content
