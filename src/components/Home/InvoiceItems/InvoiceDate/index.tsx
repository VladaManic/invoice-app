import { format } from 'date-fns'
import clsx from 'clsx'

import { InvoiceObj } from '../../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const InvoiceDate = ({ invoice, colorTheme }: Props) => {
    const date = invoice !== undefined && new Date(invoice.paymentDue)

    return (
        <p className="w-40 text-xs xs:text-right md:text-left">
            <span
                className={clsx(
                    colorTheme === 'light'
                        ? 'text-singleGrey'
                        : 'text-checkboxViolet'
                )}
            >
                Due&nbsp;
            </span>
            <span
                className={clsx(
                    colorTheme === 'light'
                        ? 'text-singleGrey'
                        : 'text-checkboxViolet'
                )}
            >
                {date !== false && format(date, 'dd MMM y')}
            </span>
        </p>
    )
}

export default InvoiceDate
