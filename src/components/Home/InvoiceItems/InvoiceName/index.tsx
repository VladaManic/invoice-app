import clsx from 'clsx'

import { InvoiceObj } from '../../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const InvoiceName = ({ invoice, colorTheme }: Props) => {
    return (
        <p
            className={clsx(
                'text-left text-xs xs:mb-[5px] md:mb-0 md:ml-[30px]',
                colorTheme === 'light'
                    ? 'text-defaultText'
                    : 'text-defaultWhite'
            )}
        >
            {invoice !== undefined && invoice.clientName}
        </p>
    )
}

export default InvoiceName
