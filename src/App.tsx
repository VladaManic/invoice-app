import { useEffect } from 'react'
import { useAppDispatch } from './state/hooks'
import { fetchInvoices } from './state/invoice/invoiceSlice'

import Aside from './layout/Aside'
import Main from './layout/Main'

import './App.css'

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    return (
        <div id="app-wrap">
            <Aside />
            <Main />
        </div>
    )
}

export default App
