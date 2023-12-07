import { useState } from 'react'
import { useAppDispatch } from '../../../state/hooks'
import { fetchInvoicesByStatus } from '../../../state/invoice/invoiceSlice'
import useAccordion from '../../../hooks/useAccordion'
import clsx from 'clsx'

import arrowIcon from '../../../assets/img/arrow.svg'

const Filter = () => {
    const dispatch = useAppDispatch()
    const [status, setStatus] = useState<string | null>(null)
    //Using custom hook for opening/closing region
    const { opened, setOpened } = useAccordion(false)

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        setStatus(e.currentTarget.value)
        dispatch(fetchInvoicesByStatus(e.currentTarget.value))
    }

    return (
        <div className="relative mr-3 flex items-center font-spartanBold text-defaultBlack">
            <div className="flex items-center">
                <p className="text-xs">Filter by status</p>
                <button
                    className="p-3"
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
                    <div className="absolute left-[-40px] top-[50px] h-[128px] w-[192px] bg-defaultWhite p-[30px] shadow-[0_10px_20px_0_rgba(0,0,0,0.25)]">
                        <div className="mb-2 flex items-center text-left">
                            <button
                                value="draft"
                                className={clsx(
                                    'bg-checkboxViolet mr-1 h-4 w-4 rounded-[3px] p-0',
                                    status === 'draft' && 'checked-field'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className="rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent"
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
                                    'bg-checkboxViolet mr-1 h-4 w-4 rounded-[3px] p-0',
                                    status === 'pending' && 'checked-field'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className="rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent"
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
                                    'bg-checkboxViolet mr-1 h-4 w-4 rounded-[3px] p-0',
                                    status === 'paid' && 'checked-field'
                                )}
                                onClick={onClickHandler}
                            ></button>
                            <button
                                className="rounded-none pb-[1px] pl-[3px] pr-[3px] pt-[1px] text-xs hover:border-transparent"
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
