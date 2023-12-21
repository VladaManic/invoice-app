import { useAppSelector } from '../../../state/hooks'

import Modal from '../../Reusable/Modal'
import FormModal from '../../Modal/FormModal'
import Filter from '../Filter'

interface Props {
    openModal: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
    onClose: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
}

const Intro = ({ openModal, onClick, onClose }: Props) => {
    const invoice = useAppSelector((state) => state.invoice)

    return (
        <div className="mb-14 flex w-[730px] items-center justify-between">
            <div className="text-left">
                <h1 className="mb-3 text-defaultBlack">Invoices</h1>
                {invoice.invoices.length > 0 ? (
                    <p>There are {invoice.invoices.length} total invoices</p>
                ) : (
                    <p>No invoices</p>
                )}
            </div>
            <div className="flex">
                <Filter />
                <div className="flex h-12 w-40 items-center rounded-[50px] bg-packmanUp p-2">
                    <button
                        className="mr-5 flex h-[32px] w-[32px] rounded-[50px] p-0 text-packmanUp focus:outline-none focus:ring-0"
                        onClick={onClick}
                    >
                        <span className="m-auto font-spartanBold text-xl leading-[37px]">
                            +
                        </span>
                    </button>
                    <p className="font-spartanBold text-xs text-defaultWhite">
                        New Invoice
                    </p>
                </div>
            </div>
            {openModal && (
                <Modal onClose={onClose}>
                    <FormModal onClose={onClose} />
                </Modal>
            )}
        </div>
    )
}

export default Intro
