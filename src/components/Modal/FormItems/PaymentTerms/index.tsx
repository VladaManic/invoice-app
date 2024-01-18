import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useAppSelector } from '../../../../state/hooks'
import clsx from 'clsx'

import arrowIcon from '../../../../assets/img/arrow.svg'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
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
    const invoiceRedux = useAppSelector((state) => state.invoice)

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
            <label
                className={clsx(
                    'font-spartanMedium text-xs',
                    invoiceRedux.colorTheme === 'light'
                        ? 'text-singleGrey'
                        : 'text-checkboxViolet'
                )}
            >
                Payment Terms
            </label>
            <button
                value={selectValue}
                className={clsx(
                    'flex w-full items-center justify-between rounded-[5px] border-[1px] border-solid p-[15px] text-right font-spartanBold text-xs text-defaultBlack focus:border-packmanUp focus:outline-none focus:ring-0',
                    invoiceRedux.colorTheme === 'light'
                        ? 'border-checkboxViolet bg-transparent text-defaultBlack'
                        : 'border-editDark bg-editDark text-defaultWhite'
                )}
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
                <div
                    className={clsx(
                        'absolute top-[80px] w-full overflow-hidden rounded-[10px] font-spartanBold text-xs',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-defaultBlack shadow-[0_10px_20px_0_rgba(223,227,250,0.9)]'
                            : 'text-defaultWhite'
                    )}
                >
                    <button
                        value="1"
                        name="Net 1 Day"
                        className={clsx(
                            'border-b-solid w-full rounded-none border-b-[1px] pb-[15px] pt-[15px] text-left hover:text-packmanUp  focus:outline-none focus:ring-0',
                            invoiceRedux.colorTheme === 'light'
                                ? 'border-b-checkboxViolet hover:border-defaultWhite hover:border-b-checkboxViolet'
                                : 'border-b-defaultBlack bg-editDark hover:border-editDark hover:border-b-defaultBlack'
                        )}
                        onClick={onClickDropdown}
                    >
                        Net 1 Day
                    </button>
                    <button
                        value="7"
                        name="Net 7 Days"
                        className={clsx(
                            'border-b-solid w-full rounded-none border-b-[1px] pb-[15px] pt-[15px] text-left hover:text-packmanUp focus:outline-none focus:ring-0',
                            invoiceRedux.colorTheme === 'light'
                                ? 'border-b-checkboxViolet hover:border-defaultWhite hover:border-b-checkboxViolet'
                                : 'border-b-defaultBlack bg-editDark hover:border-editDark hover:border-b-defaultBlack'
                        )}
                        onClick={onClickDropdown}
                    >
                        Net 7 Days
                    </button>
                    <button
                        value="14"
                        name="Net 14 Days"
                        className={clsx(
                            'border-b-solid w-full rounded-none border-b-[1px] pb-[15px] pt-[15px] text-left hover:text-packmanUp focus:outline-none focus:ring-0',
                            invoiceRedux.colorTheme === 'light'
                                ? 'border-b-checkboxViolet hover:border-defaultWhite hover:border-b-checkboxViolet'
                                : 'border-b-defaultBlack bg-editDark hover:border-editDark hover:border-b-defaultBlack'
                        )}
                        onClick={onClickDropdown}
                    >
                        Net 14 Days
                    </button>
                    <button
                        value="30"
                        name="Net 30 Days"
                        className={clsx(
                            'border-b-solid w-full rounded-none border-b-[1px] pb-[15px] pt-[15px] text-left hover:text-packmanUp focus:outline-none focus:ring-0',
                            invoiceRedux.colorTheme === 'light'
                                ? 'border-b-checkboxViolet hover:border-defaultWhite hover:border-b-checkboxViolet'
                                : 'border-b-defaultBlack bg-editDark hover:border-editDark hover:border-b-defaultBlack'
                        )}
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
