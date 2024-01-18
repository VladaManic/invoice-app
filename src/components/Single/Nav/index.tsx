import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import arrowLeft from '../../../assets/img/arrow-left.svg'

interface Props {
    colorTheme: string
}

const Nav = ({ colorTheme }: Props) => {
    return (
        <NavLink to={'/'}>
            <div className="mb-6 flex font-spartanBold">
                <img src={arrowLeft} alt="Arrow left" className="mr-[30px]" />
                <div
                    className={clsx(
                        colorTheme === 'light'
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
