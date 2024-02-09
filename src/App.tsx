import { useLayoutEffect } from 'react'
import { useAppSelector } from './state/hooks'

import setBodyColor from './utils/setBodyColor'

import Aside from './layout/Aside'
import Main from './layout/Main'

import './App.css'

function App() {
    //localStorage.clear()
    const themeRedux = useAppSelector((state) => state.theme)

    useLayoutEffect(() => {
        themeRedux.colorTheme === 'light'
            ? setBodyColor('#f8f8f8')
            : setBodyColor('#141625')
    }, [themeRedux.colorTheme])

    return (
        <div id="app-wrap">
            <Aside />
            <Main />
        </div>
    )
}

export default App
