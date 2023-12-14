import { useState } from 'react'

import Item from '../Item'

const ItemList = () => {
    const [itemCount, setItemCount] = useState<number>(0)

    //Adding new item
    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        e.preventDefault()
        setItemCount((prevItemCount) => prevItemCount + 1)
    }

    return (
        <div>
            <h3 className="mb-[12px] font-spartanBold text-[18px] leading-[32px]">
                Item List
            </h3>
            <div>
                <div className="mb-[8px] flex justify-between font-spartanMedium text-xs text-singleGrey">
                    <p className="w-[40%]">Item Name</p>
                    <p className="w-[10%]">Qty.</p>
                    <p className="w-[15%]">Price</p>
                    <p className="w-[15%]">Total</p>
                    <p className="w-[10%]"></p>
                </div>
                {[...Array(itemCount)].map((x, index) => (
                    <Item key={index} />
                ))}
            </div>
            <button
                className="mb-[130px] w-full pb-[12px] pt-[12px] font-spartanBold text-xs text-singleGrey"
                onClick={onClickHandler}
            >
                + Add New Item
            </button>
        </div>
    )
}

export default ItemList
