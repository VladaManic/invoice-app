import { useAppDispatch } from '../../../state/hooks'
import { setOpenModal } from '../../../state/theme/themeSlice'
import clsx from 'clsx'

interface Props {
    colorTheme: string
}

const EditBtn = ({ colorTheme }: Props) => {
    const dispatch = useAppDispatch()

    //On click New Invoice btn, open form modal
    const onClickHandler = () => {
        dispatch(setOpenModal(true))
    }

    return (
        <button
            className={clsx(
                'rounded-[50px] pb-[15px] pl-[22px] pr-[22px] pt-[15px] font-spartanBold text-xs xs:mr-1 sm:mr-3',
                colorTheme === 'light'
                    ? 'bg-tableGrey text-singleGrey'
                    : 'bg-editDark text-defaultWhite'
            )}
            onClick={onClickHandler}
        >
            Edit
        </button>
    )
}

export default EditBtn
