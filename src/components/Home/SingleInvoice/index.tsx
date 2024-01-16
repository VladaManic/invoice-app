import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../state/hooks'
import { format } from 'date-fns'
import clsx from 'clsx'

import StatusBtn from '../../Reusable/StatusBtn'

import arrowRight from '../../../assets/img/arrow-right.svg'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const SingleInvoice = ({ invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const date = new Date(invoice.paymentDue)

    return (
        <NavLink
            to={`/invoice/${invoice.id}`}
            className="block xs:w-[290px] sm:w-[322px] md:w-[672px] lg:w-[730px]"
        >
            <button
                className={clsx(
                    'mb-4 flex w-full items-center rounded-md p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] xs:flex-col md:flex-row md:pl-8',
                    invoiceRedux.colorTheme === 'light'
                        ? 'bg-defaultWhite'
                        : 'bg-asideDark'
                )}
            >
                <div className="flex max-md:justify-between xs:mb-[20px] xs:w-full md:mb-0 md:w-1/3">
                    <p className="w-28 text-left text-xs text-defaultText">
                        #
                        <span
                            className={clsx(
                                'font-spartanBold',
                                invoiceRedux.colorTheme === 'light'
                                    ? 'text-defaultBlack'
                                    : 'text-defaultWhite'
                            )}
                        >
                            {invoice.id}
                        </span>
                    </p>
                    <p className="w-40 text-xs xs:text-right md:text-left">
                        <span
                            className={clsx(
                                invoiceRedux.colorTheme === 'light'
                                    ? 'text-singleGrey'
                                    : 'text-checkboxViolet'
                            )}
                        >
                            Due&nbsp;
                        </span>
                        <span
                            className={clsx(
                                invoiceRedux.colorTheme === 'light'
                                    ? 'text-singleGrey'
                                    : 'text-checkboxViolet'
                            )}
                        >
                            {format(date, 'dd MMM y')}
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-between xs:w-full md:w-2/3">
                    <div className="flex justify-between xs:flex-col md:w-3/5 md:flex-row md:items-center">
                        <p
                            className={clsx(
                                'text-left text-xs xs:mb-[5px] md:mb-0 md:ml-[30px]',
                                invoiceRedux.colorTheme === 'light'
                                    ? 'text-defaultText'
                                    : 'text-defaultWhite'
                            )}
                        >
                            {invoice.clientName}
                        </p>
                        <p
                            className={clsx(
                                'flex font-spartanBold text-base',
                                invoiceRedux.colorTheme === 'light'
                                    ? 'text-defaultBlack'
                                    : 'text-defaultWhite'
                            )}
                        >
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
