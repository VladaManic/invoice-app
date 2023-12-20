import { useState, useRef } from 'react'
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
    const [total, setTotal] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const quantityRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)

    //Calculating total from price and quantity
    const onChangeHandler = () => {
        if (
            quantityRef.current!.value !== '' &&
            priceRef.current!.value !== ''
        ) {
            const total =
                parseFloat(quantityRef.current!.value) *
                parseFloat(priceRef.current!.value)
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
                        errors.items && 'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.name`)}
                />
            </div>
            <div className="w-[10%]">
                <input
                    type="number"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        errors.items && 'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.quantity`)}
                    ref={quantityRef}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="w-[15%]">
                <input
                    type="text"
                    className={clsx(
                        'h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet bg-transparent pl-[15px] font-spartanBold text-xs text-defaultBlack',
                        errors.items && 'border-errorRed'
                    )}
                    {...register(`items.${itemIndex}.price`)}
                    ref={priceRef}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex w-[15%] items-center">
                <p
                    className="bg-transparent"
                    {...register(`items.${itemIndex}.total`)}
                >
                    {total}
                </p>
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
