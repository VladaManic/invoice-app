import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { setStatus } from '../../../state/theme/themeSlice'
import clsx from 'clsx'

import useAccordion from '../../../hooks/useAccordion'

import arrowIcon from '../../../assets/img/arrow.svg'

interface Props {
    colorTheme: string
}

const Filter = ({ colorTheme }: Props) => {
    const themeRedux = useAppSelector((state) => state.theme)
    const dispatch = useAppDispatch()
    //Using custom hook for opening/closing dropdown
    const { opened, setOpened } = useAccordion(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        //Click outside dropdown, closes it
        const clickOutsideHandler = (e: MouseEvent | TouchEvent) => {
            if (
                dropdownRef.current !== null &&
                !dropdownRef.current!.contains(e.target as Node)
            ) {
                setOpened(false)
            }
        }
        document.addEventListener('mousedown', clickOutsideHandler)
        document.addEventListener('touchstart', clickOutsideHandler)
        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler)
            document.removeEventListener('touchstart', clickOutsideHandler)
        }
    }, [])

    //Clicking on dropdown status to filter
    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        dispatch(setStatus(e.currentTarget.value))
    }

    return (
        <div
            ref={dropdownRef}
            className="relative flex items-center font-spartanBold text-defaultBlack xs:mr-[2px] md:mr-3"
        >
            <div className="flex items-center">
                <p
                    className={clsx(
                        'text-xs max-md:hidden md:block',
                        colorTheme === 'light'
                            ? 'text-defaultBlack'
                            : 'text-defaultWhite'
                    )}
                >
                    Filter by status
                </p>
                <p
                    className={clsx(
                        'text-xs max-md:block md:hidden',
                        colorTheme === 'light'
                            ? 'text-defaultBlack'
                            : 'text-defaultWhite'
                    )}
                >
                    Filter
                </p>
                <button
                    className={clsx(
                        'p-3',
                        colorTheme === 'light' ? 'bg-lightBg' : 'bg-themeDark'
                    )}
                    onClick={() => setOpened((curr: boolean) => !curr)}
                >
                    <img
                        src={arrowIcon}
                        alt="Arrow icon"
                        className={clsx('arrow-rotate', opened && 'active')}
                    />
                </button>
            </div>
            {opened && (
                <>
                    <div
                        className={clsx(
                            'absolute left-[-40px] top-[50px] h-[128px] w-[192px] p-[30px] shadow-[0_10px_20px_0_rgba(0,0,0,0.25)]',
                            colorTheme === 'light'
                                ? 'bg-defaultWhite'
                                : 'bg-asideDark'
                        )}
                    >
                        <div className="mb-2 flex items-center text-left">
                            <button
                                value="draft"
                                className={clsx(
                                    'mr-1 h-4 w-4 rounded-[3px] p-0',
                                    themeRedux.filterStatus === 'draft' &&
                                        'checked-field',
                                    colorTheme === 'light'
                                        ? 'bg-checkboxViolet '
                                        : 'bg-themeDark'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className={clsx(
                                    'rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent',
                                    colorTheme === 'light'
                                        ? 'text-defaultBlack'
                                        : 'bg-asideDark text-defaultWhite'
                                )}
                                onClick={onClickHandler}
                                value="draft"
                            >
                                Draft
                            </button>
                        </div>
                        <div className="mb-2 flex items-center text-left">
                            <button
                                value="pending"
                                className={clsx(
                                    'mr-1 h-4 w-4 rounded-[3px] bg-checkboxViolet p-0',
                                    themeRedux.filterStatus === 'pending' &&
                                        'checked-field',
                                    colorTheme === 'light'
                                        ? 'bg-checkboxViolet '
                                        : 'bg-themeDark'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className={clsx(
                                    'rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent',
                                    colorTheme === 'light'
                                        ? 'text-defaultBlack'
                                        : 'bg-asideDark text-defaultWhite'
                                )}
                                onClick={onClickHandler}
                                value="pending"
                            >
                                Pending
                            </button>
                        </div>
                        <div className="mb-2 flex items-center text-left">
                            <button
                                value="paid"
                                className={clsx(
                                    'mr-1 h-4 w-4 rounded-[3px] bg-checkboxViolet p-0',
                                    themeRedux.filterStatus === 'paid' &&
                                        'checked-field',
                                    colorTheme === 'light'
                                        ? 'bg-checkboxViolet '
                                        : 'bg-themeDark'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className={clsx(
                                    'rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent',
                                    colorTheme === 'light'
                                        ? 'text-defaultBlack'
                                        : 'bg-asideDark text-defaultWhite'
                                )}
                                onClick={onClickHandler}
                                value="paid"
                            >
                                Paid
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Filter
