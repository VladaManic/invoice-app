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
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <div className="mb-14 flex items-center justify-between lg:w-[730px]">
            <div className="text-left">
                <h1 className="mb-3 text-defaultBlack">Invoices</h1>
                {invoiceRedux.invoices.length > 0 ? (
                    <>
                        <p className="text-xs max-md:hidden md:block">
                            There are {invoiceRedux.invoices.length} total
                            invoices
                        </p>
                        <p className="text-xs max-md:block md:hidden">
                            {invoiceRedux.invoices.length} invoices
                        </p>
                    </>
                ) : (
                    <p>No invoices</p>
                )}
            </div>
            <div className="flex">
                <Filter />
                <div className="flex h-12 items-center rounded-[50px] bg-packmanUp p-2 pr-[16px]">
                    <button
                        className="mr-4 flex h-[32px] w-[32px] rounded-[50px] p-0 text-packmanUp focus:outline-none focus:ring-0"
                        onClick={onClick}
                    >
                        <span className="m-auto font-spartanBold text-xl leading-[37px]">
                            +
                        </span>
                    </button>
                    <p className="font-spartanBold text-xs text-defaultWhite max-md:hidden md:block">
                        New Invoice
                    </p>
                    <p className="font-spartanBold text-xs text-defaultWhite max-md:block md:hidden">
                        New
                    </p>
                </div>
            </div>
            {openModal && (
                <Modal onClose={onClose}>
                    <FormModal invoice={undefined} onClose={onClose} />
                </Modal>
            )}
        </div>
    )
}

export default Intro
