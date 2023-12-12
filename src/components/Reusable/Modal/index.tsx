import ReactDom from 'react-dom'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ children, onClose }: Props) => {
    return ReactDom.createPortal(
        <>
            <div
                className="bg-overlayGrey fixed bottom-0 left-0 right-0 top-0 z-[100]"
                onClick={onClose}
            ></div>
            <div className="fixed left-[50%] top-[50%] z-[100] -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </>,
        document.body
    )
}

export default Modal
