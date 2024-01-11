import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
    onClickEdit: React.MouseEventHandler<HTMLButtonElement>
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
}

const ChangeButtons = ({
    invoice,
    onClickEdit,
    onClickDelete,
    onClickPaid,
}: Props) => {
    return (
        <div className="flex min-[335px]:justify-between">
            <button
                className="rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs xs:mr-1 sm:mr-3"
                onClick={onClickEdit}
            >
                Edit
            </button>
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
