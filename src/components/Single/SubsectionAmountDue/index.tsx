import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionAmountDue = ({ invoice }: Props) => {
    return (
        <div className="flex items-center justify-between rounded-b-[10px] bg-asideBg xs:pb-[30px] xs:pl-[10px] xs:pr-[10px] xs:pt-[30px] sm:p-[30px]">
            <p className="text-[11px] leading-[18px] text-defaultWhite">
                Amount Due
            </p>
            <p className="font-spartanBold leading-[32px] tracking-[-0.42px] text-defaultWhite xs:text-[20px] md:text-[24px]">
                <span>£</span> {parseFloat(invoice.total.toString()).toFixed(2)}
            </p>
        </div>
    )
}

export default SubsectionAmountDue
