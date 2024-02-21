import clsx from 'clsx'

import { InvoiceObj } from '../../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const InvoiceId = ({ invoice, colorTheme }: Props) => {
    return (
        <p className="w-28 text-left text-xs text-defaultText">
            #
            <span
                className={clsx(
                    'font-spartanBold',
                    colorTheme === 'light'
                        ? 'text-defaultBlack'
                        : 'text-defaultWhite'
                )}
            >
                {invoice !== undefined && invoice.id}
            </span>
        </p>
    )
}

export default InvoiceId
