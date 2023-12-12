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
        <div className="w-[730px] rounded-lg bg-defaultWhite p-10 text-singleGrey">
            <SubsectionId invoice={invoice} />
            <SubsectionDate invoice={invoice} />
            <SubsectionItemName invoice={invoice} />
            <SubsectionAmountDue invoice={invoice} />
        </div>
    )
}

export default Content
