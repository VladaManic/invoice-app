import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import { FormDataObj } from '../../../../../types/interfaces'
interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
}

const DatePicker = ({ register, errors }: Props) => {
    return (
        <div className="xs:w-full min-[525px]:w-[48%]">
            <div className="flex justify-between text-singleGrey">
                <label
                    htmlFor="invoice-date"
                    className={clsx(
                        'font-spartanMedium text-xs',
                        errors!.paymentDue && 'text-errorRed'
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
