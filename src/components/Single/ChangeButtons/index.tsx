import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { setOpenModal } from '../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
}

const ChangeButtons = ({ invoice, onClickDelete, onClickPaid }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //On click New Invoice btn, open form modal
    const onClickHandler = () => {
        dispatch(setOpenModal(true))
    }

    return (
        <div className="flex min-[335px]:justify-between md:justify-end">
            <button
                className={clsx(
                    'rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs xs:mr-1 sm:mr-3',
                    invoiceRedux.colorTheme === 'light'
                        ? 'bg-tableGrey'
                        : 'bg-editDark'
                )}
                onClick={onClickHandler}
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
