import { useAppDispatch } from '../../../state/hooks'
import { setOpenModal } from '../../../state/invoice/invoiceSlice'

import emptyIcon from '../../../assets/img/empty.png'

const EmptyInvoices = () => {
    const dispatch = useAppDispatch()

    //On click New Invoice btn, open form modal
    const onClickHandler = () => {
        dispatch(setOpenModal(true))
    }

    return (
        <div className="mt-[130px]">
            <div className="mb-[50px]">
                <img
                    src={emptyIcon}
                    alt="No invoices image"
                    className="ml-auto mr-auto"
                />
            </div>
            <h1 className="mb-[30px] text-[20px] leading-[22px] text-defaultBlack">
                There is nothing here
            </h1>
            <p className="ml-auto mr-auto w-[230px] text-xs">
                {' '}
                Create an invoice by clicking the{' '}
                <button
                    className="p-0 font-spartanBold hover:border-transparent focus:outline-none focus:ring-0"
                    onClick={onClickHandler}
                >
                    New Invoice
                </button>{' '}
                button and get started
            </p>
        </div>
    )
}

export default EmptyInvoices
