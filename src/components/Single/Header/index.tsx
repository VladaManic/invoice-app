import StatusBtn from '../../Reusable/StatusBtn'

import { InvoiceObj } from '../../../types/interfaces'

interface Props {
    invoice: InvoiceObj
}

const Header = ({ invoice }: Props) => {
    return (
        <div className="mb-4 flex w-[730px] items-center rounded-lg bg-defaultWhite p-4 shadow-[0_10px_10px_-10px_rgba(0,0,0,0.1)]">
            <p>Status</p>
            <StatusBtn invoice={invoice} />
        </div>
    )
}

export default Header
