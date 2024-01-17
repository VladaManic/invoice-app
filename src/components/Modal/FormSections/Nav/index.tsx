import { useAppDispatch, useAppSelector } from '../../../../state/hooks'
import { setOpenModal } from '../../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import arrowLeft from '../../../../assets/img/arrow-left.svg'

const Nav = () => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
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
            <div
                className={clsx(
                    'text-defaultBlack',
                    invoiceRedux.colorTheme === 'light'
                        ? 'text-defaultBlack'
                        : 'text-defaultWhite'
                )}
            >
                Go back
            </div>
        </div>
    )
}

export default Nav
