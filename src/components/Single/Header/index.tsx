import Modal from '../../Reusable/Modal'
import StatusBtn from '../../Reusable/StatusBtn'
import ChangeButtons from '../ChangeButtons'
import DeleteConfirmationModal from '../../Modal/DeleteConfirmationModal'
import FormModal from '../../Modal/FormModal'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
    openEditModal: boolean
    openDeleteModal: boolean
    onClickEdit: React.MouseEventHandler<HTMLButtonElement>
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
    onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const Header = ({
    invoice,
    openEditModal,
    openDeleteModal,
    onClickEdit,
    onClickDelete,
    onClickPaid,
    onClose,
}: Props) => {
    return (
        <div className="mb-4 flex items-center justify-between rounded-lg bg-defaultWhite p-4 pl-8 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] md:w-[688px] lg:w-[730px]">
            <div className="flex items-center justify-between xs:w-full md:w-auto">
                <p className="mr-5 text-xs">Status</p>
                <StatusBtn invoice={invoice} />
            </div>
            <div className="w-[320px] max-md:hidden md:block">
                <ChangeButtons
                    invoice={invoice}
                    onClickEdit={onClickEdit}
                    onClickDelete={onClickDelete}
                    onClickPaid={onClickPaid}
                />
            </div>
            {openDeleteModal && (
                <Modal onClose={onClose}>
                    <DeleteConfirmationModal
                        invoice={invoice}
                        onClose={onClose}
                    />
                </Modal>
            )}
            {openEditModal && (
                <Modal onClose={onClose}>
                    <FormModal invoice={invoice} onClose={onClose} />
                </Modal>
            )}
        </div>
    )
}

export default Header
