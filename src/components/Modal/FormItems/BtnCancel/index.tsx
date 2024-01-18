import clsx from 'clsx'

interface Props {
    onClose: React.MouseEventHandler<HTMLButtonElement>
    colorTheme: string
}

const BtnCancel = ({ colorTheme, onClose }: Props) => {
    return (
        <button
            className={clsx(
                'mr-[15px] rounded-[50px] pb-[15px] pt-[15px] font-spartanBold text-xs min-[480px]:pl-[22px] min-[480px]:pr-[22px]',
                colorTheme === 'light'
                    ? 'text-draftText'
                    : 'bg-editDark text-defaultWhite'
            )}
            onClick={onClose}
        >
            Cancel
        </button>
    )
}

export default BtnCancel
