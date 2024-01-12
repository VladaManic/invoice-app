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
            className="block xs:w-[290px] sm:w-[322px] md:w-[672px] lg:w-[730px]"
        >
            <button className="mb-4 flex w-full items-center rounded-md bg-defaultWhite p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:flex-col md:flex-row md:pl-8">
                <div className="flex max-md:justify-between xs:mb-[20px] xs:w-full md:mb-0 md:w-1/3">
                    <p className="w-28 text-left text-xs text-defaultText">
                        #
                        <span className="font-spartanBold text-defaultBlack">
                            {invoice.id}
                        </span>
                    </p>
                    <p className="w-40 text-xs xs:text-right md:text-left">
                        <span className="text-defaultText">Due&nbsp;</span>
                        <span className="text-defaultText">
                            {format(date, 'dd MMM y')}
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-between xs:w-full md:w-2/3">
                    <div className="flex justify-between xs:flex-col md:w-3/5 md:flex-row md:items-center">
                        <p className="text-left text-xs text-defaultText xs:mb-[5px] md:mb-0 md:ml-[30px]">
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
