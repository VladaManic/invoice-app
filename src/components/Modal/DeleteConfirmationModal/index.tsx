import { useAppDispatch } from '../../../state/hooks'
import { deleteSingleInvoice } from '../../../state/invoice/invoiceSlice'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const DeleteConfirmationModal = ({ invoice, onClose }: Props) => {
    const dispatch = useAppDispatch()

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const id = e.currentTarget.value
        dispatch(deleteSingleInvoice(id))
    }

    return (
        <div className="h-[249px] w-[480px] rounded-lg bg-defaultWhite p-[40px]">
            <h2 className="mb-[15px] font-spartanBold text-[24px] leading-[32px] text-defaultBlack">
                Confirm Deletion
            </h2>
            <p className="mb-[15px] text-[12px] leading-[22px]">
                Are you sure you want to delete invoice #XM9141? This action
                cannot be undone.
            </p>
            <div className="text-right">
                <button
                    className="mr-3 rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    className="rounded-[50px] bg-deleteRed pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite"
                    onClick={onClickHandler}
                    value={invoice.id}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal
