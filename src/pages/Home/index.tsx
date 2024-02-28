import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import {
    fetchInvoices,
    fetchInvoicesByStatus,
    resetSuccess,
} from '../../state/invoice/invoiceSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { TOASTIFY_PARAMS } from '../../constants/toastifyConstant'

import Loader from '../../components/Reusable/Loader'
import Intro from '../../components/Home/Intro'
import Content from '../../components/Home/Content'

const Home = () => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()
    let isError, isLoading, data

    useEffect(() => {
        if (invoiceRedux.successDelete) {
            toast.success(
                'You successfully deleted the invoice!',
                TOASTIFY_PARAMS
            )
            //After showing the success message for deleting invoice, reseting the success to false for new potential delete
            dispatch(resetSuccess())
        }
    }, [])

    //Tanstack query call fetching all invoice data and caching them
    const {
        isError: isErrorAll,
        isLoading: isLoadingAll,
        data: dataAll,
    } = useQuery({
        queryKey: ['Invoices'],
        queryFn: () => dispatch(fetchInvoices()),
        enabled: themeRedux.filterStatus === null,
    })

    //Tanstack query call fetching filtered invoice data and caching them
    const {
        isError: isErrorFilter,
        isLoading: isLoadingFilter,
        data: dataFilter,
    } = useQuery({
        queryKey: ['Invoices: ' + themeRedux.filterStatus],
        queryFn: () => dispatch(fetchInvoicesByStatus(themeRedux.filterStatus)),
        enabled: themeRedux.filterStatus !== null,
    })

    //Returned data in case before filter selected
    if (themeRedux.filterStatus === null) {
        isError = isErrorAll
        isLoading = isLoadingAll
        data = dataAll
        //Returned data in case filter selected
    } else {
        isError = isErrorFilter
        isLoading = isLoadingFilter
        data = dataFilter
    }
    //console.log(queryClient.getQueryData(['Invoices']))

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && isError && <h2>Error: {isError}</h2>}
            {!isLoading && !isError ? (
                <>
                    <Intro
                        colorTheme={themeRedux.colorTheme}
                        invoice={data!.payload}
                    />
                    <Content invoice={data!.payload} />
                </>
            ) : null}
            <ToastContainer />
        </div>
    )
}

export default Home
