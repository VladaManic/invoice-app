import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import InvoiceId from '../InvoiceItems/InvoiceId'
import InvoiceDate from '../InvoiceItems/InvoiceDate'
import InvoiceName from '../InvoiceItems/InvoiceName'
import InvoiceAmount from '../InvoiceItems/InvoiceAmount'
import StatusBtn from '../../Reusable/StatusBtn'

import arrowRight from '../../../assets/img/arrow-right.svg'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const SingleInvoice = ({ invoice, colorTheme }: Props) => {
    const param = invoice !== undefined && invoice.id

    return (
        <NavLink
            to={`/invoice/${param}`}
            className="block xs:w-[290px] sm:w-[322px] md:w-[672px] lg:w-[730px]"
        >
            <button
                className={clsx(
                    'mb-4 flex w-full items-center rounded-md p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:flex-col md:flex-row md:pl-8',
                    colorTheme === 'light' ? 'bg-defaultWhite' : 'bg-asideDark'
                )}
            >
                <div className="flex max-md:justify-between xs:mb-[20px] xs:w-full md:mb-0 md:w-1/3">
                    <InvoiceId invoice={invoice} colorTheme={colorTheme} />
                    <InvoiceDate invoice={invoice} colorTheme={colorTheme} />
                </div>
                <div className="flex items-center justify-between xs:w-full md:w-2/3">
                    <div className="flex justify-between xs:flex-col md:w-3/5 md:flex-row md:items-center">
                        <InvoiceName
                            invoice={invoice}
                            colorTheme={colorTheme}
                        />
                        <InvoiceAmount
                            invoice={invoice}
                            colorTheme={colorTheme}
                        />
                    </div>
                    <div className="flex items-center justify-between pl-[30px] md:w-2/5">
                        <StatusBtn invoice={invoice} colorTheme={colorTheme} />
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
