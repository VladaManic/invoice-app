import { useAppSelector } from '../../../state/hooks'

const Intro = () => {
    const invoice = useAppSelector((state) => state.invoice)

    return (
        <div className="mb-14 flex w-[730px] justify-between">
            <div>
                <h1 className="text-defaultBlack">Invoices</h1>
                <p>There are {invoice.invoices.length} total invoices</p>
            </div>
            <div>
                <p>Filter by status</p>
                <button>New Invoice</button>
            </div>
        </div>
    )
}

export default Intro
