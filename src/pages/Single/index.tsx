import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import {
    fetchSingleInvoice,
    updateToPaid,
} from '../../state/invoice/invoiceSlice'

import Loader from '../../components/Reusable/Loader'
import Nav from '../../components/Single/Nav'
import Header from '../../components/Single/Header'
import Content from '../../components/Single/Content'

const Single = () => {
    //Get URL
    const { pathname } = useLocation()
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSingleInvoice(pathname.replace('/invoice/', '')))
    }, [])

    //Opening edit form
    const onClickEdit = () => {
        setOpenEditModal(true)
    }

    //Opening delete confirmation modal
    const onClickDelete = () => {
        setOpenDeleteModal(true)
    }

    //On click modal overlay, closes modal
    const onCloseHandler = () => {
        setOpenEditModal(false)
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
                    <Nav />
                    <Header
                        invoice={invoiceRedux.singleInvoice}
                        openEditModal={openEditModal}
                        openDeleteModal={openDeleteModal}
                        onClickEdit={onClickEdit}
                        onClickDelete={onClickDelete}
                        onClickPaid={onClickPaid}
                        onClose={onCloseHandler}
                    />
                    <Content
                        invoice={invoiceRedux.singleInvoice}
                        onClickEdit={onClickEdit}
                        onClickDelete={onClickDelete}
                        onClickPaid={onClickPaid}
                    />
                </>
            ) : null}
        </div>
    )
}

export default Single
