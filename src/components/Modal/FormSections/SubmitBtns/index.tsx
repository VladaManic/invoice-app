import clsx from 'clsx'

import BtnDraft from '../../FormItems/BtnDraft'
import BtnCancel from '../../FormItems/BtnCancel'

interface Props {
    pathname: string
    colorTheme: string
    onClose: React.MouseEventHandler<HTMLButtonElement>
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SubmitBtns = ({ pathname, colorTheme, onClose, onClick }: Props) => {
    let submitText
    //Edit form value
    if (pathname.includes('/invoice/')) {
        submitText = 'Save changes'
        //Add form value
    } else {
        submitText = 'Save & Send'
    }

    return (
        <div
            className={clsx(
                'fixed bottom-0 left-0 z-[100] flex h-[110px] items-center xs:w-full xs:pl-[5px] xs:pr-[5px] min-[352px]:justify-between sm:pl-[15px] sm:pr-[15px] min-[630px]:w-[630px] min-[630px]:rounded-r-2xl md:pl-[50px] md:pr-[42px] lg:left-[87px]',
                colorTheme === 'light' ? 'bg-defaultWhite' : 'bg-themeDark'
            )}
        >
            {pathname.includes('/invoice/') ? (
                <div></div>
            ) : (
                <button
                    className="rounded-[50px] pb-[15px] pt-[15px] font-spartanBold text-xs min-[480px]:pl-[22px] min-[480px]:pr-[22px]"
                    onClick={onClose}
                >
                    Discard
                </button>
            )}
            <div>
                {pathname.includes('/invoice/') ? (
                    <BtnCancel colorTheme={colorTheme} onClose={onClose} />
                ) : (
                    <BtnDraft colorTheme={colorTheme} onClick={onClick} />
                )}
                <button
                    type="submit"
                    name="pending"
                    className="rounded-[50px] bg-packmanUp pb-[15px] pt-[15px] font-spartanBold text-xs text-defaultWhite min-[480px]:pl-[22px] min-[480px]:pr-[22px]"
                    onClick={onClick}
                >
                    {submitText}
                </button>
            </div>
        </div>
    )
}

export default SubmitBtns
