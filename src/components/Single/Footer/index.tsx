import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

import ChangeButtons from '../ChangeButtons'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
}

const Footer = ({ invoice, onClickDelete, onClickPaid }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div
            className={clsx(
                'bottom-0 left-0 xs:absolute xs:w-full xs:pb-[20px] xs:pl-[5px] xs:pr-[5px] xs:pt-[20px] sm:p-[20px] md:static md:hidden md:w-auto',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-defaultWhite'
                    : 'bg-asideDark'
            )}
        >
            <ChangeButtons
                invoice={invoice}
                onClickDelete={onClickDelete}
                onClickPaid={onClickPaid}
            />
        </div>
    )
}

export default Footer
