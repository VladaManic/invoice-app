import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchSingleInvoice } from '../../state/invoice/invoiceSlice'

import Loader from '../../components/Reusable/Loader'
import Nav from '../../components/Single/Nav'
import Header from '../../components/Single/Header'
import Content from '../../components/Single/Content'

const Single = () => {
    //Get URL
    const { pathname } = useLocation()
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSingleInvoice(pathname.replace('/invoice/', '')))
    }, [])

    return (
        <div>
            {invoiceRedux.loading && <Loader />}
            {!invoiceRedux.loading && invoiceRedux.error && (
                <h2>Error: {invoiceRedux.error}</h2>
            )}
            {!invoiceRedux.loading && invoiceRedux.singleInvoice !== null ? (
                <>
                    <Nav />
                    <Header invoice={invoiceRedux.singleInvoice} />
                    <Content invoice={invoiceRedux.singleInvoice} />
                </>
            ) : null}
        </div>
    )
}

export default Single
