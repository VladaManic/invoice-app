import { useAppSelector } from '../../../state/hooks'

const Intro = () => {
    const invoice = useAppSelector((state) => state.invoice)

    return (
        <div>
            <div>
                <h1>Invoices</h1>
                <p>There are {invoice.invoices.length} total invoices</p>
            </div>
            <p>Filter by status</p>
            <button>New Invoice</button>
        </div>
    )
}

export default Intro
