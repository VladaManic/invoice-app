import { format } from 'date-fns'

import arrowRight from '../../../assets/img/arrow-right.svg'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SingleInvoice = ({ invoice }: Props) => {
    const date = new Date(invoice.paymentDue)
    console.log(date)

    return (
        <div className="mb-4 flex w-[730px] items-center rounded-lg bg-defaultWhite p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)]">
            <div className="flex w-3/5">
                <p className="w-28 text-left text-xs">
                    #
                    <span className="font-spartanBold text-defaultBlack">
                        {invoice.id}
                    </span>
                </p>
                <p className="w-40 text-left text-xs">
                    <span>Due&nbsp;</span>
                    <span>{format(date, 'dd MMM y')}</span>
                </p>
                <p className="text-left text-xs">{invoice.clientName}</p>
            </div>
            <div className="flex w-2/5 items-center justify-end">
                <p className="mr-10 flex font-spartanBold text-base text-defaultBlack">
                    <span>£</span> <span>{invoice.total}</span>
                </p>
                {invoice.status === 'pending' ? (
                    <div className="text-pendingOrange bg-pendingBg flex h-10 w-28 rounded-md">
                        <p className="m-auto flex items-center">
                            <span className="-ml-2 text-4xl">&#x2022;</span>
                            <span className="font-spartanBold text-xs capitalize">
                                {invoice.status}
                            </span>
                        </p>
                    </div>
                ) : invoice.status === 'paid' ? (
                    <div className="text-paidGreen bg-paidBg flex h-10 w-28 rounded-md">
                        <p className="m-auto flex items-center">
                            <span className="-ml-2 text-4xl">&#x2022;</span>
                            <span className="font-spartanBold text-xs capitalize">
                                {invoice.status}
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="text-draftGrey bg-draftBg flex h-10 w-28 rounded-md">
                        <p className="m-auto flex items-center">
                            <span className="-ml-2 text-4xl">&#x2022;</span>
                            <span className="font-spartanBold text-xs capitalize">
                                {invoice.status}
                            </span>
                        </p>
                    </div>
                )}
                <button className="ml-5 p-0">
                    <img src={arrowRight} alt="Arrow right" />
                </button>
            </div>
        </div>
    )
}

export default SingleInvoice
