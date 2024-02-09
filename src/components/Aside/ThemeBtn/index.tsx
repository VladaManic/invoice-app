import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { setColorTheme } from '../../../state/theme/themeSlice'
import clsx from 'clsx'

import SunIcon from '../SunIcon'
import MoonIcon from '../MoonIcon'

const ThemeBtn = () => {
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()

    //On click btn, change theme
    const onClickHandler = () => {
        dispatch(setColorTheme())
    }

    return (
        <button
            id="theme-switcher"
            className={clsx(
                'ml-auto mr-auto block bg-asideBg lg:mb-10',
                themeRedux.colorTheme === 'light'
                    ? 'bg-asideBg'
                    : 'bg-asideDark'
            )}
            onClick={onClickHandler}
        >
            {themeRedux.colorTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}

export default ThemeBtn
