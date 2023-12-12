export type SenderAddressObj = {
    street: string
    city: string
    postCode: string
    country: string
}

export type ClientAddressObj = {
    street: string
    city: string
    postCode: string
    country: string
}

export type ItemObj = {
    name: string
    quantity: number
    price: number
    total: number
}

export type InvoiceObj = {
    id: string
    createdAt: string
    paymentDue: string
    description: string
    clientName: string
    clientEmail: string
    status: string
    senderAddress: SenderAddressObj
    clientAddress: ClientAddressObj
    items: ItemObj[]
    total: number
}

export type InitialStateObj = {
    loading: boolean
    invoices: [] | InvoiceObj[]
    singleInvoice: null | InvoiceObj
    error: string | undefined
}
