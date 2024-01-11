import { format } from 'date-fns'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SubsectionDate = ({ invoice }: Props) => {
    const dateCreated = new Date(invoice.createdAt)
    const datePayment = new Date(invoice.paymentDue)

    return (
        <div className="mb-10 flex xs:flex-col md:flex-row">
            <div className="flex xs:mb-[30px] xs:w-full md:mb-0 md:w-[60%]">
                <div className="w-[50%] text-left">
                    <p className="mb-3 font-spartanMedium text-xs">
                        Invoice Date
                    </p>
                    <p className="mb-8 font-spartanBold text-defaultBlack">
                        {format(dateCreated, 'dd MMM y')}
                    </p>
                    <p className="mb-3 font-spartanMedium text-xs">
                        Payment Due
                    </p>
                    <p className="font-spartanBold text-defaultBlack">
                        {format(datePayment, 'dd MMM y')}
                    </p>
                </div>
                <div className="w-[50%] text-left">
                    <p className="mb-[12px] font-spartanMedium text-xs">
                        Bill To
                    </p>
                    <p className="mb-2 font-spartanBold text-defaultBlack">
                        {invoice.clientName}
                    </p>
                    <p className="text-[11px] leading-[18px]">
                        {invoice.clientAddress.street}
                    </p>
                    <p className="text-[11px] leading-[18px]">
                        {invoice.clientAddress.city}
                    </p>
                    <p className="text-[11px] leading-[18px]">
                        {invoice.clientAddress.postCode}
                    </p>
                    <p className="text-[11px] leading-[18px]">
                        {invoice.clientAddress.country}
                    </p>
                </div>
            </div>
            <div className="w-[40%] text-left">
                <p className="mb-[12px] font-spartanMedium text-xs">Send to</p>
                <p className="font-spartanBold text-defaultBlack">
                    {invoice.clientEmail}
                </p>
            </div>
        </div>
    )
}

export default SubsectionDate
