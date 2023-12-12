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
        <NavLink to={`/invoice/${invoice.id}`}>
            <button className="mb-4 flex w-[730px] items-center rounded-lg bg-defaultWhite p-4 pl-8 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)]">
                <div className="flex w-3/5">
                    <p className="w-28 text-left text-xs text-defaultText">
                        #
                        <span className="font-spartanBold text-defaultBlack">
                            {invoice.id}
                        </span>
                    </p>
                    <p className="w-40 text-left text-xs">
                        <span className="text-defaultText">Due&nbsp;</span>
                        <span className="text-defaultText">
                            {format(date, 'dd MMM y')}
                        </span>
                    </p>
                    <p className="text-left text-xs text-defaultText">
                        {invoice.clientName}
                    </p>
                </div>
                <div className="flex w-2/5 items-center justify-end">
                    <p className="mr-10 flex font-spartanBold text-base text-defaultBlack">
                        <span>£</span>{' '}
                        {parseFloat(invoice.total.toString()).toFixed(2)}
                    </p>
                    <StatusBtn invoice={invoice} />
                    <div className="ml-5 p-0">
                        <img src={arrowRight} alt="Arrow right" />
                    </div>
                </div>
            </button>
        </NavLink>
    )
}

export default SingleInvoice
