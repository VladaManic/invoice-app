import { useAppSelector } from '../../../state/hooks'
import { orderBy } from 'lodash'

import SingleInvoice from '../SingleInvoice'
import EmptyInvoices from '../EmptyInvoices'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj[]
}

const Content = ({ invoice }: Props) => {
    const themeRedux = useAppSelector((state) => state.theme)
    const invoicesSorted = orderBy(invoice, ['createdAt'], ['desc'])

    return (
        <>
            {invoice.length !== 0 ? (
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
