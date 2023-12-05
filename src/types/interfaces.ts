export type InvoiceObj = {
    id: string
    paymentDue: string
    clientName: string
    total: number
    status: string
}

export type InitialStateObj = {
    loading: boolean
    invoices: [] | InvoiceObj[]
    error: string | undefined
}
