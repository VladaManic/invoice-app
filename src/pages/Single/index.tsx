import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import {
    fetchSingleInvoice,
    updateToPaid,
} from '../../state/invoice/invoiceSlice'
import { setStatus } from '../../state/theme/themeSlice'

import Loader from '../../components/Reusable/Loader'
import Nav from '../../components/Single/Nav'
import Header from '../../components/Single/Header'
import Content from '../../components/Single/Content'
import Footer from '../../components/Single/Footer'

const Single = () => {
    //Get URL
    const { pathname } = useLocation()
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSingleInvoice(pathname.replace('/invoice/', '')))
        //Reset filter status
        dispatch(setStatus(null))
    }, [])

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
        dispatch(updateToPaid(invoiceRedux.singleInvoice))
    }

    return (
        <div>
            {invoiceRedux.loading && <Loader />}
            {!invoiceRedux.loading && invoiceRedux.error && (
                <h2>Error: {invoiceRedux.error}</h2>
            )}
            {!invoiceRedux.loading && invoiceRedux.singleInvoice !== null ? (
                <>
                    <Nav colorTheme={themeRedux.colorTheme} />
                    <Header
                        invoice={invoiceRedux.singleInvoice}
                        openDeleteModal={openDeleteModal}
                        colorTheme={themeRedux.colorTheme}
                        onClickDelete={onClickDelete}
                        onClickPaid={onClickPaid}
                        onClose={onCloseHandler}
                    />
                    <Content
                        invoice={invoiceRedux.singleInvoice}
                        colorTheme={themeRedux.colorTheme}
                    />
                    <Footer
                        invoice={invoiceRedux.singleInvoice}
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
