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
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
        if (invoiceRedux.successDelete) {
            toast.success(
                'You successfully deleted the invoice!',
                TOASTIFY_PARAMS
            )
            //After showing the success message for deleting invoice, reseting the success to false for new potential delete
            dispatch(resetSuccess())
        }
    }, [])

    return (
        <div>
            {invoiceRedux.loading && <Loader />}
            {!invoiceRedux.loading && invoiceRedux.error && (
                <h2>Error: {invoiceRedux.error}</h2>
            )}
            {!invoiceRedux.loading && !invoiceRedux.error ? (
                <>
                    <Intro colorTheme={invoiceRedux.colorTheme} />
                    <Content invoice={invoiceRedux} />
                </>
            ) : null}
            <ToastContainer />
        </div>
    )
}

export default Home
