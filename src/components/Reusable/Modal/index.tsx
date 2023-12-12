import { useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { resetError } from '../../../state/invoice/invoiceSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../../../constants/toastifyConstant'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ children, onClose }: Props) => {
    const invoice = useAppSelector((state) => state.invoice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (invoice.errorDelete) {
            toast.error('Error while deleting the invoice!', TOASTIFY_PARAMS)
            //After showing the error for deleting invoice, reseting the error to undefined for new potencial delete try
            dispatch(resetError())
        }
    }, [invoice.errorDelete])

    return ReactDom.createPortal(
        <>
            <div
                className="bg-overlayGrey fixed bottom-0 left-0 right-0 top-0 z-[100]"
                onClick={onClose}
            ></div>
            <div className="fixed left-[50%] top-[50%] z-[100] -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
            <ToastContainer />
        </>,
        document.body
    )
}

export default Modal
