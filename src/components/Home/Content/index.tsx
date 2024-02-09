import { useAppSelector } from '../../../state/hooks'
import { orderBy } from 'lodash'

import SingleInvoice from '../SingleInvoice'
import EmptyInvoices from '../EmptyInvoices'

import { InvoiceObj, InitialStateObj } from '../../../types/interfaces'
interface Props {
    invoice: InitialStateObj
}

const Content = ({ invoice }: Props) => {
    const themeRedux = useAppSelector((state) => state.theme)
    const invoicesSorted = orderBy(invoice.invoices, ['createdAt'], ['desc'])

    return (
        <>
            {invoice.invoices.length !== 0 ? (
                <div>
                    {invoicesSorted.map((singleInvoice: InvoiceObj) => (
                        <SingleInvoice
                            key={singleInvoice.id}
                            invoice={singleInvoice}
                            colorTheme={themeRedux.colorTheme}
                        />
                    ))}
                </div>
            ) : (
                <EmptyInvoices colorTheme={themeRedux.colorTheme} />
            )}
        </>
    )
}

export default Content
