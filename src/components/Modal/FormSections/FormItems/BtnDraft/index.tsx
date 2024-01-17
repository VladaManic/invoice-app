interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BtnDraft = ({ onClick }: Props) => {
    return (
        <button
            type="submit"
            name="draft"
            className="rounded-[50px] bg-asideBg pb-[15px] pt-[15px] font-spartanBold text-xs text-draftText min-[352px]:mr-[15px] min-[480px]:pl-[22px] min-[480px]:pr-[22px]"
            onClick={onClick}
        >
            <span className="max-[337px]:hidden">Save as Draft</span>
            <span className="min-[337px]:hidden">Save Draft</span>
        </button>
    )
}

export default BtnDraft
