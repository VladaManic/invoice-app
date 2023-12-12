import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionId = ({ invoice }: Props) => {
    return (
        <div className="mb-5 flex justify-between">
            <div className="text-left">
                <p className="mb-3 font-spartanBold text-base">
                    <span>#</span>
                    <span className="text-defaultBlack">{invoice.id}</span>
                </p>
                <p className="font-spartanMedium text-xs">
                    {invoice.description}
                </p>
            </div>
            <div className="text-right">
                <p className="text-[11px] leading-[18px]">
                    {invoice.senderAddress.street}
                </p>
                <p className="text-[11px] leading-[18px]">
                    {invoice.senderAddress.city}
                </p>
                <p className="text-[11px] leading-[18px]">
                    {invoice.senderAddress.postCode}
                </p>
                <p className="text-[11px] leading-[18px]">
                    {invoice.senderAddress.country}
                </p>
            </div>
        </div>
    )
}

export default SubsectionId
