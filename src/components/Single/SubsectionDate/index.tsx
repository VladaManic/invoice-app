import clsx from 'clsx'
import { format } from 'date-fns'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const SubsectionDate = ({ invoice, colorTheme }: Props) => {
    const dateCreated = new Date(invoice.createdAt)
    const datePayment = new Date(invoice.paymentDue)

    return (
        <div className="mb-10 flex xs:flex-col md:flex-row">
            <div className="flex xs:mb-[30px] xs:w-full md:mb-0 md:w-[60%]">
                <div className="w-[50%] text-left">
                    <p
                        className={clsx(
                            'mb-3 font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-checkboxViolet'
                        )}
                    >
                        Invoice Date
                    </p>
                    <p
                        className={clsx(
                            'mb-8 font-spartanBold text-defaultBlack',
                            colorTheme === 'light'
                                ? 'text-defaultBlack'
                                : 'text-defaultWhite'
                        )}
                    >
                        {format(dateCreated, 'dd MMM y')}
                    </p>
                    <p
                        className={clsx(
                            'mb-3 font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-checkboxViolet'
                        )}
                    >
                        Payment Due
                    </p>
                    <p
                        className={clsx(
                            'font-spartanBold text-defaultBlack',
                            colorTheme === 'light'
                                ? 'text-defaultBlack'
                                : 'text-defaultWhite'
                        )}
                    >
                        {format(datePayment, 'dd MMM y')}
                    </p>
                </div>
                <div className="w-[50%] text-left">
                    <p
                        className={clsx(
                            'mb-[12px] font-spartanMedium text-xs',
                            colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-checkboxViolet'
                        )}
                    >
                        Bill To
                    </p>
                    <p
                        className={clsx(
                            'mb-2 font-spartanBold text-defaultBlack',
                            colorTheme === 'light'
                                ? 'text-defaultBlack'
                                : 'text-defaultWhite'
                        )}
                    >
                        {invoice.clientName}
                    </p>
                    <div
                        className={clsx(
                            colorTheme === 'light'
                                ? 'text-defaultText'
                                : 'text-checkboxViolet'
                        )}
                    >
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
            </div>
            <div className="w-[40%] text-left">
                <p
                    className={clsx(
                        'mb-[12px] font-spartanMedium text-xs',
                        colorTheme === 'light'
                            ? 'text-defaultText'
                            : 'text-checkboxViolet'
                    )}
                >
                    Send to
                </p>
                <p
                    className={clsx(
                        'font-spartanBold text-defaultBlack',
                        colorTheme === 'light'
                            ? 'text-defaultBlack'
                            : 'text-defaultWhite'
                    )}
                >
                    {invoice.clientEmail}
                </p>
            </div>
        </div>
    )
}

export default SubsectionDate
