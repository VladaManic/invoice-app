/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import datepickerSettup from '../../../../utils/datepickerSettup'
import clsx from 'clsx'
import { format } from 'date-fns'

import datepickerIcon from '../../../../assets/img/datepicker.svg'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
    colorTheme: string
}

const DatePicker = ({ register, errors, invoice, colorTheme }: Props) => {
    const [datepickerOpened, setDatepickerOpened] = useState<boolean>(false)
    const datePayment = invoice !== undefined && new Date(invoice.paymentDue)

    useEffect(() => {
        datepickerSettup()
    }, [])

    const onClickHandler = () => {
        setDatepickerOpened(!datepickerOpened)
    }

    return (
        <div className="max-[525px]:mb-[20px] xs:w-full min-[525px]:w-[48%]">
            <div className="flex justify-between text-singleGrey">
                <label
                    htmlFor="datepicker"
                    className={clsx(
                        'font-spartanMedium text-xs',
                        colorTheme === 'light'
                            ? errors.paymentDue
                                ? 'text-errorRed'
                                : 'text-singleGrey'
                            : errors.paymentDue
                              ? 'text-errorRed'
                              : 'text-checkboxViolet'
                    )}
                >
                    Invoice Date
                </label>
                {errors.paymentDue && (
                    <span className="block text-xs text-errorRed">
                        {errors.paymentDue.message}
                    </span>
                )}
            </div>
            <div id="datepicker-wrap" className="relative">
                <input
                    type="text"
                    defaultValue={
                        datePayment !== false
                            ? format(datePayment, 'dd MMM y')
                            : ''
                    }
                    readOnly
                    id="datapicker-val"
                    className={clsx(
                        'flex w-full cursor-pointer items-center rounded-[5px] border-[1px] border-solid p-[15px] font-spartanBold text-xs text-defaultBlack hover:border-packmanUp focus:border-packmanUp focus:outline-none focus:ring-0',
                        colorTheme === 'light'
                            ? !datepickerOpened
                                ? 'border-checkboxViolet bg-transparent text-titleDark'
                                : 'border-checkboxViolet bg-transparent text-defaultBlack'
                            : !datepickerOpened
                              ? 'border-editDark bg-editDark text-titleDark'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    {...register('paymentDue')}
                    onClick={onClickHandler}
                />
                <img
                    src={datepickerIcon}
                    alt="datepicker icon"
                    className="absolute right-[15px] top-[15px]"
                />
                <div
                    id="datepicker"
                    className={clsx(
                        'z-50 mt-[10px] flex w-full rounded-[5px]',
                        datepickerOpened ? 'absolute block' : 'hidden',
                        colorTheme === 'light'
                            ? 'light-theme bg-defaultWhite text-defaultBlack shadow-[0_10px_20px_0_rgba(223,227,250,0.9)]'
                            : 'dark-theme bg-editDark'
                    )}
                ></div>
            </div>
        </div>
    )
}

export default DatePicker
