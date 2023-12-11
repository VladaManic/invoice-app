import { NavLink } from 'react-router-dom'

import arrowLeft from '../../../assets/img/arrow-left.svg'

const Nav = () => {
    return (
        <NavLink to={'/'}>
            <div className="mb-10 flex font-spartanBold">
                <img src={arrowLeft} alt="Arrow left" className="mr-[30px]" />
                <div className="text-defaultBlack">Go back</div>
            </div>
        </NavLink>
    )
}

export default Nav
