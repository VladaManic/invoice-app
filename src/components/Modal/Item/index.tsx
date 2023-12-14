import { useAppDispatch } from '../../../state/hooks'
import { removeItem } from '../../../state/invoice/invoiceSlice'

import trashIcon from '../../../assets/img/trash.svg'

interface Props {
    itemIndex: number
}

const Item = ({ itemIndex }: Props) => {
    const dispatch = useAppDispatch()

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
                />
            </div>
            <div className="w-[15%]">
                <input
                    type="text"
                    className="h-[48px] w-full rounded-[5px] border-[1px] border-solid border-checkboxViolet pl-[15px] font-spartanBold text-xs text-defaultBlack"
                />
            </div>
            <div className="w-[15%]"></div>
            <div className="w-[10%]">
                <button onClick={onClickTrash}>
                    <img src={trashIcon} alt="Trash icon" />
                </button>
            </div>
        </div>
    )
}

export default Item
