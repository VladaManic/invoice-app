import { useAppSelector } from '../../../state/hooks'

import arrowIcon from '../../../assets/img/arrow.svg'

const Intro = () => {
    const invoice = useAppSelector((state) => state.invoice)

    return (
        <div className="mb-14 flex w-[730px] items-center justify-between">
            <div className="text-left">
                <h1 className="mb-3 text-defaultBlack">Invoices</h1>
                <p>There are {invoice.invoices.length} total invoices</p>
            </div>
            <div className="flex">
                <div className="mr-3 flex items-center font-spartanBold text-defaultBlack">
                    <p className="text-xs">Filter by status</p>
                    <button className="p-3">
                        <img src={arrowIcon} alt="Arrow icon" />
                    </button>
                </div>
                <div className="flex h-12 w-40 items-center rounded-[50px] bg-packmanUp p-2">
                    <button className="mr-5 flex h-[32px] w-[32px] rounded-[50px] p-0 text-packmanUp">
                        <span className="m-auto font-spartanBold text-xl leading-[37px]">
                            +
                        </span>
                    </button>
                    <p className="font-spartanBold text-xs text-defaultWhite">
                        New Invoice
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro
