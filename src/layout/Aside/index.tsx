import { useAppSelector } from '../../state/hooks'
import clsx from 'clsx'

import Logo from '../../components/Aside/Logo'
import ThemeBtn from '../../components/Aside/ThemeBtn'
import Person from '../../components/Aside/Person'

const Aside = () => {
    const themeRedux = useAppSelector((state) => state.theme)

    return (
        <div
            className={clsx(
                'left-0 top-0 z-[101] flex justify-between overflow-hidden xs:w-full lg:fixed lg:h-screen lg:w-[96px] lg:flex-col lg:rounded-r-2xl',
                themeRedux.openFormModal ? 'xs:fixed' : 'xs:absolute',
                themeRedux.colorTheme === 'light'
                    ? 'bg-asideBg'
                    : 'bg-asideDark'
            )}
        >
            <Logo />
            <div className="flex xs:flex-row lg:flex-col">
                <ThemeBtn />
                <Person />
            </div>
        </div>
    )
}

export default Aside
