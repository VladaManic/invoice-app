import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionAmountDue = ({ invoice }: Props) => {
    return (
        <div className="flex items-center justify-between rounded-b-[10px] bg-asideBg p-[30px]">
            <p className="text-[11px] leading-[18px] text-defaultWhite">
                Amount Due
            </p>
            <p className="font-spartanBold text-[24px] leading-[32px] text-defaultWhite">
                <span>£</span> {parseFloat(invoice.total.toString()).toFixed(2)}
            </p>
        </div>
    )
}

export default SubsectionAmountDue
