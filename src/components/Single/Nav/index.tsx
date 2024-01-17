import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

import arrowLeft from '../../../assets/img/arrow-left.svg'

const Nav = () => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <NavLink to={'/'}>
            <div className="mb-6 flex font-spartanBold">
                <img src={arrowLeft} alt="Arrow left" className="mr-[30px]" />
                <div
                    className={clsx(
                        invoiceRedux.colorTheme === 'light'
                            ? 'text-defaultBlack'
                            : 'text-defaultWhite'
                    )}
                >
                    Go back
                </div>
            </div>
        </NavLink>
    )
}

export default Nav
