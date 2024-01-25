import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import getDefaultTheme from '../../utils/getDeafultTheme'
import isStorageSupported from '../../utils/isStorageSupported'

import { InitialStateObj, InvoiceObj } from '../../types/interfaces'

const initialState: InitialStateObj = {
    loading: false,
    error: '',
    invoices: [],
    filterStatus: null,
    singleInvoice: null,
    openFormModal: false,
    itemList: [],
    loadingDelete: false,
    errorDelete: '',
    successDelete: false,
    colorTheme: getDefaultTheme(),
}

//Generates pendind, fullfiled and rejcted action types for fetching all invoices
export const fetchInvoices = createAsyncThunk('invoice/fetchInvoices', () => {
    return axios
        .get('http://localhost:3004/invoices')
        .then((response) => response.data)
})

//Filtering by invoice status (pendind, fullfiled and rejcted action types)
export const fetchInvoicesByStatus = createAsyncThunk(
    'invoice/fetcInvoicesByStatus',
    (invoiceStatus: string) => {
        return axios
            .get('http://localhost:3004/invoices?status=' + invoiceStatus)
            .then((response) => response.data)
    }
)

//Creating new invoice
export const createInvoice = createAsyncThunk(
    'invoice/createInvoice',
    (singleInvoice: InvoiceObj | null) => {
        return axios
            .post(`http://localhost:3004/invoices`, singleInvoice)
            .then((response) => response.data)
    }
)

//Fetching single invoice (pendind, fullfiled and rejcted action types)
export const fetchSingleInvoice = createAsyncThunk(
    'invoice/fetchSingleInvoice',
    (singleInvoiceId: string) => {
        return axios
            .get('http://localhost:3004/invoices/' + singleInvoiceId)
            .then((response) => response.data)
    }
)

//Deleting single invoice
export const deleteSingleInvoice = createAsyncThunk(
    'invoice/deleteSingleInvoice',
    (singleInvoiceId: string) => {
        return axios
            .delete('http://localhost:3004/invoices/' + singleInvoiceId)
            .then((response) => response.data)
    }
)

//Update invoice
export const updateInvoice = createAsyncThunk(
    'invoice/updateInvoice',
    (singleInvoice: InvoiceObj | null) => {
        return axios
            .patch(
                `http://localhost:3004/invoices/` + singleInvoice!.id,
                singleInvoice
            )
            .then((response) => response.data)
    }
)

//Updating status from pending to paid
export const updateToPaid = createAsyncThunk(
    'invoice/updatePaid',
    (singleInvoice: InvoiceObj | null) => {
        const updatedInvoice = { ...singleInvoice, status: 'paid' }
        return axios
            .patch(
                `http://localhost:3004/invoices/${singleInvoice!.id}`,
                updatedInvoice
            )
            .then((response) => response.data)
    }
)

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    //Sync reducers list
    reducers: {
        setStatus: (state, action) => {
            state.filterStatus = action.payload
        },
        setOpenModal: (state, action) => {
            state.openFormModal = action.payload
        },
        //Add new item in form item list
        addItem: (state) => {
            //If empty array
            if (state.itemList[state.itemList.length - 1] === undefined) {
                state.itemList.push(0)
                //If already numbers in array
            } else {
                state.itemList.push(
                    state.itemList[state.itemList.length - 1] + 1
                )
            }
        },
        //Remove one item from form item list
        removeItem: (state, action) => {
            state.itemList = state.itemList.filter(
                (index: number) => index !== action.payload
            )
        },
        //Remove all items from form item list
        removeAllItems: (state) => {
            state.itemList = []
        },
        resetError: (state) => {
            state.errorDelete = ''
        },
        resetSuccess: (state) => {
            state.successDelete = false
        },
        setColorTheme: (state) => {
            let newValue
            if (state.colorTheme === 'dark') {
                newValue = 'light'
            } else {
                newValue = 'dark'
            }
            state.colorTheme = newValue
            //Adding value to local storage
            isStorageSupported('localStorage') &&
                localStorage.setItem('default-theme', JSON.stringify(newValue))
        },
    },
    //Async reducers
    extraReducers: (builder) => {
        //Fetching all invoices
        builder.addCase(fetchInvoices.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchInvoices.fulfilled, (state, action) => {
            state.loading = false
            state.invoices = action.payload
            state.error = ''
        })
        builder.addCase(fetchInvoices.rejected, (state, action) => {
            state.loading = false
            state.invoices = []
            state.error = action.error.message
        })
        //Fetching invoices filtered by status
        builder.addCase(fetchInvoicesByStatus.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchInvoicesByStatus.fulfilled, (state, action) => {
            state.loading = false
            state.invoices = action.payload
            state.error = ''
        })
        builder.addCase(fetchInvoicesByStatus.rejected, (state, action) => {
            state.loading = false
            state.invoices = []
            state.error = action.error.message
        })
        //Creating new invoice
        builder.addCase(createInvoice.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createInvoice.fulfilled, (state, action) => {
            state.loading = false
            state.invoices = [...state.invoices, action.payload]
            state.itemList = []
            state.error = ''
        })
        builder.addCase(createInvoice.rejected, (state, action) => {
            state.loading = false
            state.invoices = []
            state.error = action.error.message
        })
        //Fetching single invoice
        builder.addCase(fetchSingleInvoice.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSingleInvoice.fulfilled, (state, action) => {
            state.loading = false
            state.singleInvoice = action.payload
            state.error = ''
        })
        builder.addCase(fetchSingleInvoice.rejected, (state, action) => {
            state.loading = false
            state.singleInvoice = null
            state.error = action.error.message
        })
        //Delete single invoice
        builder.addCase(deleteSingleInvoice.pending, (state) => {
            state.loadingDelete = true
        })
        builder.addCase(deleteSingleInvoice.fulfilled, (state) => {
            state.loadingDelete = false
            state.errorDelete = ''
            state.successDelete = true
        })
        builder.addCase(deleteSingleInvoice.rejected, (state, action) => {
            state.loadingDelete = false
            state.errorDelete = action.error.message
        })
        //Update single invoice
        builder.addCase(updateInvoice.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateInvoice.fulfilled, (state, action) => {
            state.loading = false
            state.singleInvoice = action.payload
            state.itemList = []
            state.error = ''
        })
        builder.addCase(updateInvoice.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //Update single invoice status to "Paid"
        builder.addCase(updateToPaid.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateToPaid.fulfilled, (state, action) => {
            state.loading = false
            state.singleInvoice = action.payload
            state.error = ''
        })
        builder.addCase(updateToPaid.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    },
})

export const {
    setStatus,
    setOpenModal,
    addItem,
    removeItem,
    removeAllItems,
    resetError,
    resetSuccess,
    setColorTheme,
} = invoiceSlice.actions

export default invoiceSlice.reducer
