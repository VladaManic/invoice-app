import { useAppSelector } from '../../../state/hooks'

import SingleInvoice from '../SingleInvoice'
import EmptyInvoices from '../EmptyInvoices'

import { InvoiceObj, InitialStateObj } from '../../../types/interfaces'
interface Props {
    invoice: InitialStateObj
}

const Content = ({ invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <>
            {invoice.invoices.length !== 0 ? (
                <div>
                    {invoice.invoices.map((singleInvoice: InvoiceObj) => (
                        <SingleInvoice
                            key={singleInvoice.id}
                            invoice={singleInvoice}
                            colorTheme={invoiceRedux.colorTheme}
                        />
                    ))}
                </div>
            ) : (
                <EmptyInvoices colorTheme={invoiceRedux.colorTheme} />
            )}
        </>
    )
}

export default Content
