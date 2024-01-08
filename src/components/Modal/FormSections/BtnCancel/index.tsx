interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const BtnCancel = ({ onClose }: Props) => {
    return (
        <button
            className="mr-[15px] rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-draftText"
            onClick={onClose}
        >
            Cancel
        </button>
    )
}

export default BtnCancel
