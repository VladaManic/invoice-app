import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchInvoices, resetSuccess } from '../../state/invoice/invoiceSlice'
import { setStatus } from '../../state/theme/themeSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { TOASTIFY_PARAMS } from '../../constants/toastifyConstant'

import Loader from '../../components/Reusable/Loader'
import Intro from '../../components/Home/Intro'
import Content from '../../components/Home/Content'

const Home = () => {
    const [invoicesFilter, setInvoicesFilter] = useState<string>('all')
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()

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

    //Tanstack query call for caching fetched data
    const { isError, isLoading, data } = useQuery({
        queryKey: ['Invoices: ' + invoicesFilter],
        queryFn: () => dispatch(fetchInvoices(invoicesFilter)),
    })

    //Clicking on dropdown status to filter
    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        dispatch(setStatus(e.currentTarget.value))
        setInvoicesFilter(e.currentTarget.value)
    }

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && isError && <h2>Error: {isError}</h2>}
            {!isLoading && !isError ? (
                <>
                    <Intro
                        colorTheme={themeRedux.colorTheme}
                        onClick={onClickHandler}
                    />
                    <Content invoice={data!.payload} />
                </>
            ) : null}
            <ToastContainer />
        </div>
    )
}

export default Home
