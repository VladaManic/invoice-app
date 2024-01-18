import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { setOpenModal } from '../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import Modal from '../../Reusable/Modal'
import StatusBtn from '../../Reusable/StatusBtn'
import ChangeButtons from '../ChangeButtons'
import DeleteConfirmationModal from '../../Modal/DeleteConfirmationModal'
import FormModal from '../../Modal/FormModal'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    openDeleteModal: boolean
    colorTheme: string
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    onClickPaid: React.MouseEventHandler<HTMLButtonElement>
    onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

const Header = ({
    invoice,
    openDeleteModal,
    colorTheme,
    onClickDelete,
    onClickPaid,
    onClose,
}: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //Closing form modal
    const onCloseHandler = () => {
        dispatch(setOpenModal(false))
    }

    return (
        <div
            className={clsx(
                'mb-4 flex items-center justify-between rounded-lg p-4 pl-8 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)] md:w-[688px] lg:w-[730px]',
                colorTheme === 'light' ? 'bg-defaultWhite' : 'bg-asideDark'
            )}
        >
            <div className="flex items-center justify-between xs:w-full md:w-auto">
                <p
                    className={clsx(
                        'mr-5 text-xs',
                        colorTheme === 'light'
                            ? 'text-defaultText'
                            : 'text-checkboxViolet'
                    )}
                >
                    Status
                </p>
                <StatusBtn invoice={invoice} colorTheme={colorTheme} />
            </div>
            <div className="w-[320px] max-md:hidden md:block">
                <ChangeButtons
                    invoice={invoice}
                    onClickDelete={onClickDelete}
                    onClickPaid={onClickPaid}
                />
            </div>
            {openDeleteModal && (
                <Modal onClose={onClose}>
                    <DeleteConfirmationModal
                        invoice={invoice}
                        colorTheme={colorTheme}
                        onClose={onClose}
                    />
                </Modal>
            )}
            {invoiceRedux.openFormModal && (
                <Modal onClose={onCloseHandler}>
                    <FormModal
                        invoice={invoice}
                        colorTheme={colorTheme}
                        onClose={onCloseHandler}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Header
