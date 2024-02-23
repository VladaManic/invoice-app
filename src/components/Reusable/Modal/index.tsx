import ReactDom from 'react-dom'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement> | undefined
}

const Modal = ({ children, onClose }: Props) => {
    return ReactDom.createPortal(
        <>
            <div
                className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-overlayGrey"
                onClick={onClose}
            ></div>
            <div>{children}</div>
        </>,
        document.body
    )
}

export default Modal
