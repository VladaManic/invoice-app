import { useAppSelector } from '../../../../../state/hooks'
import clsx from 'clsx'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BtnDraft = ({ onClick }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <button
            type="submit"
            name="draft"
            className={clsx(
                'rounded-[50px] bg-asideBg pb-[15px] pt-[15px] font-spartanBold text-xs min-[352px]:mr-[15px] min-[480px]:pl-[22px] min-[480px]:pr-[22px]',
                invoiceRedux.colorTheme === 'light'
                    ? 'bg-asideBg text-draftText'
                    : 'bg-asideDark text-defaultWhite'
            )}
            onClick={onClick}
        >
            <span className="max-[337px]:hidden">Save as Draft</span>
            <span className="min-[337px]:hidden">Save Draft</span>
        </button>
    )
}

export default BtnDraft
