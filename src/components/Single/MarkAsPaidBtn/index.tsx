interface Props {
    onClickPaid: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const MarkAsPaidBtn = ({ onClickPaid }: Props) => {
    return (
        <button
            data-testid="mark-as-paid-button"
            className="rounded-[50px] bg-packmanUp pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs text-defaultWhite"
            onClick={onClickPaid}
        >
            Mark as Paid
        </button>
    )
}

export default MarkAsPaidBtn
