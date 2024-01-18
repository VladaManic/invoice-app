import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj } from '../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    colorTheme: string
}

const DatePicker = ({ register, errors, colorTheme }: Props) => {
    return (
        <div className="xs:w-full min-[525px]:w-[48%]">
            <div className="flex justify-between text-singleGrey">
                <label
                    htmlFor="invoice-date"
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
            <input type="date" id="invoice-date" {...register('paymentDue')} />
        </div>
    )
}

export default DatePicker
