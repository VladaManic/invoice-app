import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import {
    deleteSingleInvoice,
    resetError,
} from '../../../state/invoice/invoiceSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../../../constants/toastifyConstant'
import clsx from 'clsx'

import LoaderSmall from '../../../components/Reusable/LoaderSmall'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const DeleteConfirmationModal = ({ invoice, onClose }: Props) => {
    const navigate = useNavigate()
    const invoiceRedux = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        //If error while deleting single invoice
        if (invoiceRedux.errorDelete) {
            toast.error('Error while deleting the invoice!', TOASTIFY_PARAMS)
            //After showing the error for deleting invoice, reseting the error to undefined for new potencial delete try
            dispatch(resetError())
        }
        //If single invoice successfully deleted
        if (invoiceRedux.successDelete) {
            //Redirect to home page
            navigate('/')
        }
    }, [invoiceRedux.errorDelete, invoiceRedux.successDelete])

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const id = e.currentTarget.value
        dispatch(deleteSingleInvoice(id))
    }

    return (
        <div
            className={clsx(
                'fixed left-[50%] top-[50%] z-[100] -translate-x-1/2 -translate-y-1/2 rounded-lg p-[40px] xs:h-[230px] xs:w-[332px] md:h-[249px] md:w-[480px]',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-defaultWhite'
                    : 'bg-asideDark'
            )}
        >
            <h2
                className={clsx(
                    'mb-[15px] font-spartanBold text-defaultBlack xs:text-[20px] xs:leading-[32px] md:text-[24px] md:leading-[32px]',
                    invoiceRedux.colorTheme === 'light'
                        ? 'text-defaultBlack'
                        : 'text-defaultWhite'
                )}
            >
                Confirm Deletion
            </h2>
            <p
                className={clsx(
                    'mb-[15px] text-[12px] leading-[22px]',
                    invoiceRedux.colorTheme === 'light'
                        ? 'text-singleGrey'
                        : 'text-checkboxViolet'
                )}
            >
                Are you sure you want to delete invoice {invoice.id}? This
                action cannot be undone.
            </p>
            <div className="text-right">
                <button
                    className={clsx(
                        'mr-3 rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs',
                        invoiceRedux.colorTheme === 'dark' &&
                            'bg-editDark text-defaultWhite'
                    )}
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    className="rounded-[50px] bg-deleteRed pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite"
                    onClick={onClickHandler}
                    value={invoice.id}
                >
                    Delete
                </button>
            </div>
            {invoiceRedux.loadingDelete && <LoaderSmall />}
            <ToastContainer />
        </div>
    )
}

export default DeleteConfirmationModal
