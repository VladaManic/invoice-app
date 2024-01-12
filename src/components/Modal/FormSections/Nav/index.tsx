import { useAppDispatch } from '../../../../state/hooks'
import { setOpenModal } from '../../../../state/invoice/invoiceSlice'

import arrowLeft from '../../../../assets/img/arrow-left.svg'

const Nav = () => {
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setOpenModal(false))
    }

    return (
        <div
            className="mb-6 flex cursor-pointer font-spartanBold md:hidden"
            onClick={onClickHandler}
        >
            <img src={arrowLeft} alt="Arrow left" className="mr-[30px]" />
            <div className="text-defaultBlack">Go back</div>
        </div>
    )
}

export default Nav
