import { useLayoutEffect } from 'react'
import { useAppSelector } from './state/hooks'

import Aside from './layout/Aside'
import Main from './layout/Main'

import './App.css'
import setBodyColor from './utils/setBodyColor'

function App() {
    //localStorage.clear()
    const invoiceRedux = useAppSelector((state) => state.invoice)

    useLayoutEffect(() => {
        invoiceRedux.colorTheme === 'light'
            ? setBodyColor('#f8f8f8')
            : setBodyColor('#141625')
    }, [invoiceRedux.colorTheme])

    return (
        <div id="app-wrap">
            <Aside />
            <Main />
        </div>
    )
}

export default App
