import { useState } from 'react'
import { useAppSelector } from '../../../state/hooks'

import Modal from '../../Reusable/Modal'
import FormModal from '../../Modal/FormModal'

import Filter from '../Filter'

const Intro = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const invoice = useAppSelector((state) => state.invoice)

    //On click New Invoice btn, open/close form modal
    const onClickHandler = () => {
        setOpenModal(true)
    }

    //On click modal overlay, closes modal
    const onCloseHandler = () => {
        setOpenModal(false)
    }

    return (
        <div className="mb-14 flex w-[730px] items-center justify-between">
            <div className="text-left">
                <h1 className="mb-3 text-defaultBlack">Invoices</h1>
                <p>There are {invoice.invoices.length} total invoices</p>
            </div>
            <div className="flex">
                <Filter />
                <div className="flex h-12 w-40 items-center rounded-[50px] bg-packmanUp p-2">
                    <button
                        className="mr-5 flex h-[32px] w-[32px] rounded-[50px] p-0 text-packmanUp"
                        onClick={onClickHandler}
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
                <Modal onClose={onCloseHandler}>
                    <FormModal onClose={onCloseHandler} />
                </Modal>
            )}
        </div>
    )
}

export default Intro
