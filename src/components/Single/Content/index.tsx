import SubsectionId from '../SubsectionId'
import SubsectionDate from '../SubsectionDate'
import SubsectionItemName from '../SubsectionItemName'
import SubsectionAmountDue from '../SubsectionAmountDue'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const Content = ({ invoice }: Props) => {
    return (
        <div className="rounded-lg bg-defaultWhite p-10 text-singleGrey md:w-[688px] lg:w-[730px]">
            <SubsectionId invoice={invoice} />
            <SubsectionDate invoice={invoice} />
            <SubsectionItemName invoice={invoice} />
            <SubsectionAmountDue invoice={invoice} />
        </div>
    )
}

export default Content
