import clsx from 'clsx'

import SubsectionId from '../SubsectionId'
import SubsectionDate from '../SubsectionDate'
import SubsectionItemName from '../SubsectionItemName'
import SubsectionAmountDue from '../SubsectionAmountDue'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const Content = ({ invoice, colorTheme }: Props) => {
    return (
        <div
            className={clsx(
                'rounded-lg text-singleGrey shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:mb-[130px] xs:w-[290px] xs:p-[10px] sm:w-[322px] sm:p-[25px] md:mb-0 md:w-[688px] md:p-10 lg:w-[730px]',
                colorTheme === 'light' ? 'bg-defaultWhite' : 'bg-asideDark'
            )}
        >
            <SubsectionId invoice={invoice} colorTheme={colorTheme} />
            <SubsectionDate invoice={invoice} colorTheme={colorTheme} />
            <SubsectionItemName invoice={invoice} colorTheme={colorTheme} />
            <SubsectionAmountDue invoice={invoice} colorTheme={colorTheme} />
        </div>
    )
}

export default Content
