import { useAppSelector } from '../../../state/hooks'
import clsx from 'clsx'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const StatusBtn = ({ invoice }: Props) => {
    const invoiceRedux = useAppSelector((state) => state.invoice)

    return (
        <>
            {invoice.status === 'pending' ? (
                <div className="flex h-10 w-28 rounded-md bg-pendingBg text-pendingOrange">
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {invoice.status}
                        </span>
                    </p>
                </div>
            ) : invoice.status === 'paid' ? (
                <div className="flex h-10 w-28 rounded-md bg-paidBg text-paidGreen">
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {invoice.status}
                        </span>
                    </p>
                </div>
            ) : (
                <div
                    className={clsx(
                        'flex h-10 w-28 rounded-md',
                        invoiceRedux.colorTheme === 'light'
                            ? 'bg-draftBg text-draftGrey'
                            : 'bg-draftDark text-checkboxViolet'
                    )}
                >
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {invoice.status}
                        </span>
                    </p>
                </div>
            )}
        </>
    )
}

export default StatusBtn
