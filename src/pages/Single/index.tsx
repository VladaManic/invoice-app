import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { fetchSingleInvoice } from '../../state/invoice/invoiceSlice'
import { setStatus } from '../../state/theme/themeSlice'
import useUpdateInvoiceMutation from '../../hooks/useUpdateInvoiceMutation'

import Loader from '../../components/Reusable/Loader'
import Nav from '../../components/Single/Nav'
import Header from '../../components/Single/Header'
import Content from '../../components/Single/Content'
import Footer from '../../components/Single/Footer'

const Single = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()
    const updateInvoiceMutation = useUpdateInvoiceMutation(true)
    //Get URL
    const { pathname } = useLocation()
    const invoiceName = pathname.replace('/invoice/', '')

    useEffect(() => {
        dispatch(setStatus(null))
    }, [])

    //Tanstack query call fetching single invoice data and caching it
    const { isError, isLoading, data } = useQuery({
        queryKey: ['Single invoice: ' + invoiceName],
        queryFn: () => dispatch(fetchSingleInvoice(invoiceName)),
    })

    //Opening delete confirmation modal
    const onClickDelete = () => {
        setOpenDeleteModal(true)
    }

    //On click modal overlay, closes modal
    const onCloseHandler = () => {
        setOpenDeleteModal(false)
    }

    //On click 'Mark as Paid' btn
    const onClickPaid = () => {
        updateInvoiceMutation.mutate(invoiceRedux.singleInvoice)
    }

    return (
        <div>
            {isLoading && <Loader />}
            {!isLoading && isError && <h2>Error: {isError}</h2>}
            {!isLoading ? (
                <>
                    <Nav colorTheme={themeRedux.colorTheme} />
                    <Header
                        invoice={data!.payload}
                        openDeleteModal={openDeleteModal}
                        colorTheme={themeRedux.colorTheme}
                        onClickDelete={onClickDelete}
                        onClickPaid={onClickPaid}
                        onClose={onCloseHandler}
                    />
                    <Content
                        invoice={data!.payload}
                        colorTheme={themeRedux.colorTheme}
                    />
                    <Footer
                        invoice={data!.payload}
                        colorTheme={themeRedux.colorTheme}
                        onClickDelete={onClickDelete}
                        onClickPaid={onClickPaid}
                    />
                </>
            ) : null}
        </div>
    )
}

export default Single
