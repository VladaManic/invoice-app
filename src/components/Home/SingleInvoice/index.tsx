import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'

import StatusBtn from '../../Reusable/StatusBtn'

import arrowRight from '../../../assets/img/arrow-right.svg'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SingleInvoice = ({ invoice }: Props) => {
    const date = new Date(invoice.paymentDue)

    return (
        <NavLink
            to={`/invoice/${invoice.id}`}
            className="xs:w-[290px] block sm:w-[327px] md:w-[672px] lg:w-[730px]"
        >
            <button className="xs:flex-col mb-4 flex w-full items-center rounded-md bg-defaultWhite p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] md:flex-row md:pl-8">
                <div className="xs:mb-[20px] xs:w-full flex max-md:justify-between md:mb-0 md:w-1/3">
                    <p className="w-28 text-left text-xs text-defaultText">
                        #
                        <span className="font-spartanBold text-defaultBlack">
                            {invoice.id}
                        </span>
                    </p>
                    <p className="xs:text-right w-40 text-xs md:text-left">
                        <span className="text-defaultText">Due&nbsp;</span>
                        <span className="text-defaultText">
                            {format(date, 'dd MMM y')}
                        </span>
                    </p>
                </div>
                <div className="xs:w-full flex items-center justify-between md:w-2/3">
                    <div className="xs:flex-col flex items-center justify-between md:w-3/5 md:flex-row">
                        <p className="xs:mb-[5px] text-left text-xs text-defaultText md:mb-0">
                            {invoice.clientName}
                        </p>
                        <p className="flex font-spartanBold text-base text-defaultBlack">
                            <span>£</span>{' '}
                            {parseFloat(invoice.total.toString()).toFixed(2)}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pl-[30px] md:w-2/5">
                        <StatusBtn invoice={invoice} />
                        <div className="ml-5 p-0 max-md:hidden">
                            <img src={arrowRight} alt="Arrow right" />
                        </div>
                    </div>
                </div>
            </button>
        </NavLink>
    )
}

export default SingleInvoice
