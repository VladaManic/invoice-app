import { InvoiceObj, ItemObj } from '../types/interfaces'

const calculateTotal = (invoice: InvoiceObj | { items: never[] }) => {
    let result = 0
    invoice.items.forEach((item: ItemObj) => {
        result = result + item.quantity * item.price
    })
    return result
}

export default calculateTotal
