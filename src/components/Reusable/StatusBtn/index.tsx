import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const StatusBtn = ({ invoice }: Props) => {
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
                <div className="flex h-10 w-28 rounded-md bg-draftBg text-draftGrey">
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
