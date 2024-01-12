interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
}

const BtnCancel = ({ onClose }: Props) => {
    return (
        <button
            className="mr-[15px] rounded-[50px] pb-[15px] pt-[15px] font-spartanBold text-xs text-draftText min-[480px]:pl-[22px] min-[480px]:pr-[22px]"
            onClick={onClose}
        >
            Cancel
        </button>
    )
}

export default BtnCancel
