import { useAppSelector } from '../../../state/hooks'

import EditBtn from '../EditBtn'
import MarkAsPaidBtn from '../MarkAsPaidBtn'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    onClickDelete: React.MouseEventHandler<HTMLButtonElement> | undefined
    onClickPaid: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const ChangeButtons = ({ invoice, onClickDelete, onClickPaid }: Props) => {
    const themeRedux = useAppSelector((state) => state.theme)

    return (
        <div className="flex min-[335px]:justify-between md:justify-end">
            <EditBtn colorTheme={themeRedux.colorTheme} />
            <button
                className="rounded-[50px] bg-deleteRed pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite xs:mr-1 sm:mr-3"
                onClick={onClickDelete}
            >
                Delete
            </button>
            {invoice.status === 'pending' && (
                <MarkAsPaidBtn onClickPaid={onClickPaid} />
            )}
        </div>
    )
}

export default ChangeButtons
