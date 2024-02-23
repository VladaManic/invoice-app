import clsx from 'clsx'

import { InvoiceObj } from '../../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const InvoiceAmount = ({ invoice, colorTheme }: Props) => {
    return (
        <p
            className={clsx(
                'flex font-spartanBold text-base',
                colorTheme === 'light'
                    ? 'text-defaultBlack'
                    : 'text-defaultWhite'
            )}
        >
            <span>£</span>{' '}
            {invoice !== undefined &&
                parseFloat(invoice.total.toString()).toFixed(2)}
        </p>
    )
}

export default InvoiceAmount
