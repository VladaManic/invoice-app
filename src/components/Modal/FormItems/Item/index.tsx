import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../../../state/hooks'
import { removeItem } from '../../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import trashIcon from '../../../../assets/img/trash.svg'

import { FormDataObj, InvoiceObj } from '../../../../types/interfaces'
interface Props {
    itemIndex: number
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
    invoice: InvoiceObj | undefined
}

const Item = ({ itemIndex, register, errors, invoice }: Props) => {
    let defaultName, defaultQuantity, defaultPrice, defaultTotal
    if (invoice !== undefined) {
        defaultName = invoice.items[itemIndex].name
        defaultQuantity = invoice.items[itemIndex].quantity
        defaultPrice = invoice.items[itemIndex].price
        defaultTotal = invoice.items[itemIndex].total
    } else {
        defaultName = ''
        defaultQuantity = ''
        defaultPrice = ''
        defaultTotal = '0.00'
    }
    const [total, setTotal] = useState<string | number | readonly string[]>(
        defaultTotal
    )
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //Calculating total from price and quantity
    const onChangeHandler = () => {
        const quantityInput = document.getElementById(
            `quantity-${itemIndex}`
        ) as HTMLInputElement
        const priceInput = document.getElementById(
            `price-${itemIndex}`
        ) as HTMLInputElement
        if (quantityInput!.value !== '' && priceInput!.value !== '') {
            const total =
                parseFloat(quantityInput!.value) * parseFloat(priceInput!.value)
            setTotal(parseFloat(total!.toString()).toFixed(2))
        }
    }

    //Remove item
    const onClickTrash = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        dispatch(removeItem(itemIndex))
    }

    return (
        <div className="mb-[12px] flex flex-wrap justify-between font-spartanMedium text-xs text-singleGrey">
            <div className="xs:mb-[15px] xs:w-full min-[525px]:mb-0 min-[525px]:w-[40%]">
                <label
                    htmlFor={'item-name-' + itemIndex}
                    className={clsx(
                        'min-[525px]:hidden',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-singleGrey'
                            : 'text-checkboxViolet'
                    )}
                >
                    Item Name
                </label>
                <input
                    type="text"
                    id={'item-name-' + itemIndex}
                    className={clsx(
                        'ml-[1px] h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs active:border-packmanUp',
                        invoiceRedux.colorTheme === 'light'
                            ? errors.items &&
                              errors.items[itemIndex] &&
                              errors.items[itemIndex]!.name
                                ? 'border-errorRed bg-transparent text-defaultBlack'
                                : 'border-checkboxViolet bg-transparent text-defaultBlack'
                            : errors.items &&
                                errors.items[itemIndex] &&
                                errors.items[itemIndex]!.name
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultName}
                    {...register(`items.${itemIndex}.name`)}
                />
            </div>
            <div className="xs:mb-[15px] xs:w-[16%] min-[525px]:mb-0 min-[525px]:w-[10%]">
                <label
                    htmlFor={'quantity-' + itemIndex}
                    className={clsx(
                        'min-[525px]:hidden',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-singleGrey'
                            : 'text-checkboxViolet'
                    )}
                >
                    Qty.
                </label>
                <input
                    type="number"
                    min="0"
                    step="1"
                    id={`quantity-${itemIndex}`}
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        invoiceRedux.colorTheme === 'light'
                            ? errors.items &&
                              errors.items[itemIndex] &&
                              errors.items[itemIndex]!.quantity
                                ? 'border-errorRed bg-transparent text-defaultBlack'
                                : 'border-checkboxViolet bg-transparent text-defaultBlack'
                            : errors.items &&
                                errors.items[itemIndex] &&
                                errors.items[itemIndex]!.quantity
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultQuantity}
                    {...register(`items.${itemIndex}.quantity`)}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="xs:mb-[15px] xs:w-[26%] min-[525px]:mb-0 min-[525px]:w-[15%]">
                <label
                    htmlFor={'price-' + itemIndex}
                    className={clsx(
                        'min-[525px]:hidden',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-singleGrey'
                            : 'text-checkboxViolet'
                    )}
                >
                    Price
                </label>
                <input
                    type="number"
                    min="0"
                    id={`price-${itemIndex}`}
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        invoiceRedux.colorTheme === 'light'
                            ? errors.items &&
                              errors.items[itemIndex] &&
                              errors.items[itemIndex]!.price
                                ? 'border-errorRed bg-transparent text-defaultBlack'
                                : 'border-checkboxViolet bg-transparent text-defaultBlack'
                            : errors.items &&
                                errors.items[itemIndex] &&
                                errors.items[itemIndex]!.price
                              ? 'border-errorRed bg-editDark text-defaultWhite'
                              : 'border-editDark bg-editDark text-defaultWhite'
                    )}
                    defaultValue={defaultPrice}
                    {...register(`items.${itemIndex}.price`)}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="xs:mb-[15px] xs:w-[26%] min-[525px]:mb-0 min-[525px]:flex min-[525px]:w-[15%] min-[525px]:items-center">
                <label
                    className={clsx(
                        'min-[525px]:hidden',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-singleGrey'
                            : 'text-checkboxViolet'
                    )}
                >
                    Total
                </label>
                <input
                    className={clsx(
                        'w-full bg-transparent font-spartanBold focus:outline-none focus:ring-0 xs:mt-[16px] min-[525px]:mt-0',
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-draftText'
                            : 'text-defaultWhite'
                    )}
                    readOnly
                    value={total}
                    {...register(`items.${itemIndex}.total`)}
                />
            </div>
            <div className="xs:mb-[15px] xs:mt-[22px] xs:w-[16%] min-[525px]:mb-0 min-[525px]:mt-0 min-[525px]:flex min-[525px]:w-[10%] min-[525px]:items-center">
                <button onClick={onClickTrash} className="bg-transparent">
                    <img src={trashIcon} alt="Trash icon" />
                </button>
            </div>
        </div>
    )
}

export default Item
