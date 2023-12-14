import { useState, useRef } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { removeItem } from '../../../state/invoice/invoiceSlice'

import trashIcon from '../../../assets/img/trash.svg'

interface Props {
    itemIndex: number
}

const Item = ({ itemIndex }: Props) => {
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
                    className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                />
            </div>
            <div className="w-[10%]">
                <input
                    type="number"
                    className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                    ref={quantityRef}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="w-[15%]">
                <input
                    type="text"
                    className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                    ref={priceRef}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex w-[15%] items-center">
                <p>{total}</p>
            </div>
            <div className="flex w-[10%] items-center">
                <button onClick={onClickTrash}>
                    <img src={trashIcon} alt="Trash icon" />
                </button>
            </div>
        </div>
    )
}

export default Item
