import clsx from 'clsx'

import { InvoiceObj } from '../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
    colorTheme: string
}

const StatusBtn = ({ invoice, colorTheme }: Props) => {
    const status = invoice !== undefined && invoice.status

    return (
        <>
            {status === 'pending' ? (
                <div className="flex h-10 w-28 rounded-md bg-pendingBg text-pendingOrange">
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {status}
                        </span>
                    </p>
                </div>
            ) : status === 'paid' ? (
                <div className="flex h-10 w-28 rounded-md bg-paidBg text-paidGreen">
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {status}
                        </span>
                    </p>
                </div>
            ) : (
                <div
                    className={clsx(
                        'flex h-10 w-28 rounded-md',
                        colorTheme === 'light'
                            ? 'bg-draftBg text-draftGrey'
                            : 'bg-draftDark text-checkboxViolet'
                    )}
                >
                    <p className="m-auto flex items-center">
                        <span className="-ml-2 text-4xl">&#x2022;</span>
                        <span className="font-spartanBold text-xs capitalize">
                            {status}
                        </span>
                    </p>
                </div>
            )}
        </>
    )
}

export default StatusBtn
