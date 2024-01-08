import { InvoiceObj } from '../../../../types/interfaces'
interface Props {
    invoice: InvoiceObj
}

const FormTitle = ({ invoice }: Props) => {
    return (
        <>
            Edit <span className="text-draftText">#</span>
            {invoice.id}
        </>
    )
}

export default FormTitle
