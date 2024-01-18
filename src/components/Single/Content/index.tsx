import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

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
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div
            className={clsx(
                'rounded-lg text-singleGrey shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:mb-[130px] xs:w-[290px] xs:p-[10px] sm:w-[322px] sm:p-[25px] md:mb-0 md:w-[688px] md:p-10 lg:w-[730px]',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-defaultWhite'
                    : 'bg-asideDark'
            )}
        >
            <SubsectionId invoice={invoice} />
            <SubsectionDate invoice={invoice} />
            <SubsectionItemName invoice={invoice} />
            <SubsectionAmountDue invoice={invoice} />
            <div
                className={clsx(
                    'bottom-0 left-0 xs:absolute xs:w-full xs:pb-[20px] xs:pl-[5px] xs:pr-[5px] xs:pt-[20px] sm:p-[20px] md:static md:hidden md:w-auto',
                    invoiceRedux.colorTheme === 'light'
                        ? 'bg-defaultWhite'
                        : 'bg-asideDark'
                )}
            >
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
