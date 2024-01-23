import { useAppDispatch } from '../../../../state/hooks'
import { setOpenModal } from '../../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import arrowLeft from '../../../../assets/img/arrow-left.svg'

interface Props {
    colorTheme: string
}

const Nav = ({ colorTheme }: Props) => {
    const dispatch = useAppDispatch()

    //Closing modal on 'Go back' nav text
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
                    colorTheme === 'light'
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
