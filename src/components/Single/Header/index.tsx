import StatusBtn from '../../Reusable/StatusBtn'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const Header = ({ invoice }: Props) => {
    return (
        <div className="mb-4 flex w-[730px] items-center justify-between rounded-lg bg-defaultWhite p-4 pl-8 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)]">
            <div className="flex items-center">
                <p className="mr-5 text-xs">Status</p>
                <StatusBtn invoice={invoice} />
            </div>
            <div>
                <button className="mr-3 rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs">
                    Edit
                </button>
                <button className="bg-deleteRed mr-3 rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite">
                    Delete
                </button>
                <button className="rounded-[50px] bg-packmanUp pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite">
                    Mark as Paid
                </button>
            </div>
        </div>
    )
}

export default Header
