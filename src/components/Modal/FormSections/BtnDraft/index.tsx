interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BtnDraft = ({ onClick }: Props) => {
    return (
        <button
            className="mr-[15px] rounded-[50px] bg-asideBg pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-draftText"
            type="submit"
            onClick={onClick}
        >
            Save as Draft
        </button>
    )
}

export default BtnDraft
