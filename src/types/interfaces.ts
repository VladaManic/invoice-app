import { Theme, ToastPosition } from 'react-toastify'

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
    paymentTerms: number
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
    error: string | undefined
    invoices: [] | InvoiceObj[]
    singleInvoice: null | InvoiceObj
    itemList: number[]
    loadingDelete: boolean
    errorDelete: string | undefined
    successDelete: boolean
}

export type ThemeInitialStateObj = {
    filterStatus: string | null
    openFormModal: boolean
    colorTheme: string
}

export type ToastifyPropsObj = {
    position: ToastPosition | undefined
    autoClose: number
    hideProgressBar: boolean
    closeOnClick: boolean
    pauseOnHover: boolean
    draggable: boolean
    progress: undefined
    theme: Theme | undefined
}

export type FormDataObj = {
    senderAddress: string
    senderCity: string
    senderPostcode: string
    senderCountry: string
    clientName: string
    clientEmail: string
    clientAddress: string
    clientCity: string
    clientPostcode: string
    clientCountry: string
    paymentDue: string
    paymentTerms: string
    description: string
    items: {
        name: string
        quantity: number
        price: number
        total: number
    }[]
}
