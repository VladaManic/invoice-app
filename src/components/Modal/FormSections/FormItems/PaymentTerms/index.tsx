import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

import arrowIcon from '../../../../../assets/img/arrow.svg'

import { FormDataObj, InvoiceObj } from '../../../../../types/interfaces'

interface Props {
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const PaymentTerms = ({ register, invoice }: Props) => {
    let defaultPaymentTerms, defaultPaymentText
    if (invoice !== undefined) {
        defaultPaymentTerms = invoice.paymentTerms
        switch (invoice.paymentTerms.toString()) {
            case '1':
                defaultPaymentText = 'Net 1 day'
                break
            case '7':
                defaultPaymentText = 'Net 7 days'
                break
            case '14':
                defaultPaymentText = 'Net 14 days'
                break
            case '30':
                defaultPaymentText = 'Net 30 days'
                break
        }
    } else {
        defaultPaymentTerms = '1'
        defaultPaymentText = 'Net 1 day'
    }
    const [selectValue, setSelectValue] = useState<string>(defaultPaymentTerms)
    const [selectText, setSelectText] = useState<string | undefined>(
        defaultPaymentText
    )
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
        <div className="relative xs:w-full min-[525px]:w-[48%]">
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
                        value="7"
                        name="Net 7 Days"
                        className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                        onClick={onClickDropdown}
                    >
                        Net 7 Days
                    </button>
                    <button
                        value="14"
                        name="Net 14 Days"
                        className="border-b-solid w-full rounded-none border-b-[1px] border-b-checkboxViolet pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:border-b-checkboxViolet hover:text-packmanUp"
                        onClick={onClickDropdown}
                    >
                        Net 14 Days
                    </button>
                    <button
                        value="30"
                        name="Net 30 Days"
                        className="w-full rounded-none pb-[15px] pt-[15px] text-left hover:border-defaultWhite hover:text-packmanUp"
                        onClick={onClickDropdown}
                    >
                        Net 30 Days
                    </button>
                </div>
            )}
        </div>
    )
}

export default PaymentTerms
