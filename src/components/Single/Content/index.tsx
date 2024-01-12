import SubsectionId from '../SubsectionId'
import SubsectionDate from '../SubsectionDate'
import SubsectionItemName from '../SubsectionItemName'
import SubsectionAmountDue from '../SubsectionAmountDue'
import ChangeButtons from '../ChangeButtons'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
}

const Content = ({ invoice, onClickDelete, onClickPaid }: Props) => {
    return (
        <div className="rounded-lg bg-defaultWhite text-singleGrey shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:mb-[130px] xs:w-[290px] xs:p-[10px] sm:w-[327px] sm:p-[25px] md:mb-0 md:w-[688px] md:p-10 lg:w-[730px]">
            <SubsectionId invoice={invoice} />
            <SubsectionDate invoice={invoice} />
            <SubsectionItemName invoice={invoice} />
            <SubsectionAmountDue invoice={invoice} />
            <div className="bottom-0 left-0 bg-defaultWhite xs:absolute xs:w-full xs:pb-[20px] xs:pl-[5px] xs:pr-[5px] xs:pt-[20px] sm:p-[20px] md:static md:hidden md:w-auto">
                <ChangeButtons
                    invoice={invoice}
                    onClickDelete={onClickDelete}
                    onClickPaid={onClickPaid}
                />
            </div>
        </div>
    )
}

export default Content
