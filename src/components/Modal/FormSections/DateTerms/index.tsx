import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import arrowIcon from '../../../../assets/img/arrow.svg'
import { FormDataObj } from '../../../../types/interfaces'

interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
}

const DateTerms = ({ register, errors }: Props) => {
    const [selectValue, setSelectValue] = useState<string>('1')
    const [selectText, setSelectText] = useState<string>('Net 1 day')
    const [selectOpened, setSelectOpened] = useState<boolean>(false)

    //Opening/closing dropdown
    const dropdownHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        setSelectOpened(!selectOpened)
    }

    //Selecting options in dropdown
    const onClickDropdown = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        setSelectValue(e.currentTarget.value)
        setSelectText(e.currentTarget.name)
    }

    return (
        <>
            <div className="mb-[20px] flex justify-between">
                <div className="w-[48%]">
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
                    <input
                        type="date"
                        id="invoice-date"
                        {...register('paymentDue')}
                    />
                </div>
                <div className="relative w-[48%]">
                    <label className="font-spartanMedium text-xs text-singleGrey">
                        Payment Terms
                    </label>
                    <button
                        value={selectValue}
                        className="flex w-full items-center justify-between rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent p-[15px] text-right font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0"
                        onClick={dropdownHandler}
                        {...register('paymentTerms')}
                    >
                        <p>{selectText}</p>
                        <img
                            src={arrowIcon}
                            alt="Arrow down"
                            className={clsx(selectOpened && 'rotate-180')}
                        />
                    </button>
                    {selectOpened && (
                        <div className="absolute top-[80px] w-full rounded-[10px] bg-defaultWhite font-spartanBold text-xs text-defaultBlack shadow-[0_10px_20px_0_rgba(223,227,250,0.9)]">
                            <button
                                value="1"
                                name="Net 1 Day"
                                className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                onClick={onClickDropdown}
                            >
                                Net 1 Day
                            </button>
                            <button
                                value="2"
                                name="Net 7 Days"
                                className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                onClick={onClickDropdown}
                            >
                                Net 7 Days
                            </button>
                            <button
                                value="3"
                                name="Net 14 Days"
                                className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                                onClick={onClickDropdown}
                            >
                                Net 14 Dayss
                            </button>
                            <button
                                value="4"
                                name="Net 30 Days"
                                className="w-full rounded-none pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:text-packmanUp"
                                onClick={onClickDropdown}
                            >
                                Net 30 Days
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mb-[32px]">
                <div className="flex justify-between text-singleGrey">
                    <label
                        htmlFor="project-description"
                        className={clsx(
                            'font-spartanMedium text-xs',
                            errors.description && 'text-errorRed'
                        )}
                    >
                        Project Description
                    </label>
                    {errors.description && (
                        <span className="block text-xs text-errorRed">
                            {errors.description.message}
                        </span>
                    )}
                </div>
                <input
                    type="text"
                    id="project-description"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                        errors.description && 'border-errorRed'
                    )}
                    {...register('description')}
                />
            </div>
        </>
    )
}

export default DateTerms
