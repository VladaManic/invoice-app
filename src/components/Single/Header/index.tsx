import { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { updateToPaid } from '../../../state/invoice/invoiceSlice'

import Modal from '../../Reusable/Modal'
import StatusBtn from '../../Reusable/StatusBtn'
import ChangeButtons from '../ChangeButtons'
import DeleteConfirmationModal from '../../Modal/DeleteConfirmationModal'
import FormModal from '../../Modal/FormModal'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const Header = ({ invoice }: Props) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()

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
        dispatch(updateToPaid(invoice))
    }

    return (
        <div className="mb-4 flex items-center justify-between rounded-lg bg-defaultWhite p-4 pl-8 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] md:w-[688px] lg:w-[730px]">
            <div className="flex items-center justify-between xs:w-full md:w-auto">
                <p className="mr-5 text-xs">Status</p>
                <StatusBtn invoice={invoice} />
            </div>
            <div className="max-md:hidden md:block">
                <ChangeButtons
                    invoice={invoice}
                    onClickEdit={onClickEdit}
                    onClickDelete={onClickDelete}
                    onClickPaid={onClickPaid}
                />
            </div>
            {openDeleteModal && (
                <Modal onClose={onCloseHandler}>
                    <DeleteConfirmationModal
                        invoice={invoice}
                        onClose={onCloseHandler}
                    />
                </Modal>
            )}
            {openEditModal && (
                <Modal onClose={onCloseHandler}>
                    <FormModal invoice={invoice} onClose={onCloseHandler} />
                </Modal>
            )}
        </div>
    )
}

export default Header
