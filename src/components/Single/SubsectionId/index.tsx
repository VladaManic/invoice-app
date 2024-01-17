import { InvoiceObj } from '../../../types/interfaces'
import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

interface Props {
    invoice: InvoiceObj
}

const SubsectionId = ({ invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div className="mb-5 flex justify-between xs:flex-col md:flex-row">
            <div className="text-left xs:mb-[30px] md:mb-0">
                <p className="mb-3 font-spartanBold text-base">
                    <span
                        className={clsx(
                            invoiceRedux.colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-draftText'
                        )}
                    >
                        #
                    </span>
                    <span
                        className={clsx(
                            invoiceRedux.colorTheme === 'light'
                                ? 'text-defaultBlack'
                                : 'text-defaultWhite'
                        )}
                    >
                        {invoice.id}
                    </span>
                </p>
                <p
                    className={clsx(
                        'font-spartanMedium text-xs',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-defaultText'
                            : 'text-checkboxViolet'
                    )}
                >
                    {invoice.description}
                </p>
            </div>
            <div
                className={clsx(
                    'xs:text-left md:text-right',
                    invoiceRedux.colorTheme === 'light'
                        ? 'text-defaultText'
                        : 'text-checkboxViolet'
                )}
            >
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
