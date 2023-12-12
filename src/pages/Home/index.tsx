import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchInvoices, resetSuccess } from '../../state/invoice/invoiceSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../../constants/toastifyConstant'

import Loader from '../../components/Reusable/Loader'
import Intro from '../../components/Home/Intro'
import Content from '../../components/Home/Content'

const Home = () => {
    const invoice = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
        if (invoice.successDelete) {
            toast.success(
                'You successfully deleted the invoice!',
                TOASTIFY_PARAMS
            )
            //After showing the success message for deleting invoice, reseting the success to false for new potencial delete
            dispatch(resetSuccess())
        }
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
            <ToastContainer />
        </div>
    )
}

export default Home
