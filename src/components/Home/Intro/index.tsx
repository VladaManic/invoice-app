import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import {
    setOpenModal,
    removeAllItems,
} from '../../../state/invoice/invoiceSlice'
import clsx from 'clsx'

import Modal from '../../Reusable/Modal'
import FormModal from '../../Modal/FormModal'
import Filter from '../Filter'

interface Props {
    colorTheme: string
}

const Intro = ({ colorTheme }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    //On click New Invoice btn, open form modal
    const onClickHandler = () => {
        dispatch(setOpenModal(true))
    }

    //On click, close modal
    const onCloseHandler = () => {
        dispatch(setOpenModal(false))
        //Remove all item list fields
        dispatch(removeAllItems())
    }

    return (
        <div className="mb-14 flex items-center justify-between sm:w-[322px] md:w-[672px] lg:w-[730px]">
            <div className="xs:mr-[15px] xs:text-left sm:mr-[70px]">
                <h1
                    className={clsx(
                        'mb-3',
                        colorTheme === 'light'
                            ? 'text-defaultBlack'
                            : 'text-defaultWhite'
                    )}
                >
                    Invoices
                </h1>
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
                    <p className="text-xs">No invoices</p>
                )}
            </div>
            <div className="flex">
                <Filter colorTheme={colorTheme} />
                <div className="flex h-12 items-center rounded-[50px] bg-packmanUp p-2 pr-[16px]">
                    <button
                        className={clsx(
                            'mr-4 flex h-[32px] w-[32px] rounded-[50px] p-0 text-packmanUp focus:outline-none focus:ring-0',
                            colorTheme === 'light'
                                ? 'bg-lightBg'
                                : 'bg-defaultWhite'
                        )}
                        onClick={onClickHandler}
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
            {invoiceRedux.openFormModal && (
                <Modal onClose={onCloseHandler}>
                    <FormModal
                        invoice={undefined}
                        colorTheme={colorTheme}
                        onClose={onCloseHandler}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Intro
