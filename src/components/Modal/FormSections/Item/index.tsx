import { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { useAppDispatch } from '../../../../state/hooks'
import { removeItem } from '../../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import trashIcon from '../../../../assets/img/trash.svg'

import { FormDataObj } from '../../../../types/interfaces'
interface Props {
    itemIndex: number
    register: UseFormRegister<FormDataObj>
    errors: FieldErrors<FormDataObj>
}

const Item = ({ itemIndex, register, errors }: Props) => {
    const [total, setTotal] = useState<string | number | readonly string[]>(0.0)
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
        <div className="mb-[12px] flex justify-between font-spartanMedium text-xs text-singleGrey">
            <div className="w-[40%]">
                <input
                    type="text"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        errors.items &&
                            errors.items[itemIndex] &&
                            errors.items[itemIndex]!.name &&
                            'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.name`)}
                />
            </div>
            <div className="w-[10%]">
                <input
                    type="number"
                    id={`quantity-${itemIndex}`}
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        errors.items &&
                            errors.items[itemIndex] &&
                            errors.items[itemIndex]!.quantity &&
                            'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.quantity`)}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="w-[15%]">
                <input
                    type="number"
                    step="0.01"
                    id={`price-${itemIndex}`}
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        errors.items &&
                            errors.items[itemIndex] &&
                            errors.items[itemIndex]!.price &&
                            'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.price`)}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex w-[15%] items-center">
                <input
                    className="w-full bg-transparent focus:outline-none focus:ring-0"
                    readOnly
                    value={total}
                    {...register(`items.${itemIndex}.total`)}
                />
            </div>
            <div className="flex w-[10%] items-center">
                <button onClick={onClickTrash} className="bg-transparent">
                    <img src={trashIcon} alt="Trash icon" />
                </button>
            </div>
        </div>
    )
}

export default Item
