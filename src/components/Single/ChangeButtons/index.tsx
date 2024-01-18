import { useAppSelector } from '../../../state/hooks'

import EditBtn from '../EditBtn'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
}

const ChangeButtons = ({ invoice, onClickDelete, onClickPaid }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div className="flex min-[335px]:justify-between md:justify-end">
            <EditBtn colorTheme={invoiceRedux.colorTheme} />
            <button
                className="rounded-[50px] bg-deleteRed pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite xs:mr-1 sm:mr-3"
                onClick={onClickDelete}
            >
                Delete
            </button>
            {invoice.status === 'pending' && (
                <button
                    className="rounded-[50px] bg-packmanUp pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite"
                    onClick={onClickPaid}
                >
                    Mark as Paid
                </button>
            )}
        </div>
    )
}

export default ChangeButtons
