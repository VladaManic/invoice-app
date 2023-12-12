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
    const invoice = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSingleInvoice(pathname.replace('/invoice/', '')))
    }, [])

    return (
        <div>
            {invoice.loading && <Loader />}
            {!invoice.loading && invoice.error && (
                <h2>Error: {invoice.error}</h2>
            )}
            {!invoice.loading && invoice.singleInvoice !== null ? (
                <>
                    <Nav />
                    <Header invoice={invoice.singleInvoice} />
                    <Content invoice={invoice.singleInvoice} />
                </>
            ) : null}
        </div>
    )
}

export default Single
