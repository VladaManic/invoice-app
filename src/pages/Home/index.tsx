import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchInvoices } from '../../state/invoice/invoiceSlice'

import Loader from '../../components/Reusable/Loader'
import Intro from '../../components/Home/Intro'
import Content from '../../components/Home/Content'

const Home = () => {
    const invoice = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    return (
        <div>
            {invoice.loading && <Loader />}
            {!invoice.loading && invoice.error && (
                <h2>Error: {invoice.error}</h2>
            )}
            {!invoice.loading && invoice.invoices.length ? (
                <>
                    <Intro />
                    <Content invoice={invoice} />
                </>
            ) : null}
        </div>
    )
}

export default Home
