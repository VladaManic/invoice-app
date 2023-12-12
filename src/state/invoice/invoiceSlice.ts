import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { InitialStateObj } from '../../types/interfaces'

const initialState: InitialStateObj = {
    loading: false,
    loadingDelete: false,
    invoices: [],
    singleInvoice: null,
    error: '',
    errorDelete: '',
    successDelete: false,
}

//Generates pendind, fullfiled and rejcted action types for fetching all invoices
export const fetchInvoices = createAsyncThunk('invoice/fetcInvoices', () => {
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

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    //Sync reducers list
    reducers: {
        resetError: (state) => {
            state.errorDelete = ''
        },
        resetSuccess: (state) => {
            state.successDelete = false
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
        builder.addCase(deleteSingleInvoice.fulfilled, (state, action) => {
            state.loadingDelete = false
            state.invoices = action.payload
            state.errorDelete = ''
            state.successDelete = true
        })
        builder.addCase(deleteSingleInvoice.rejected, (state, action) => {
            state.loadingDelete = false
            state.errorDelete = action.error.message
        })
    },
})

export const { resetError, resetSuccess } = invoiceSlice.actions

export default invoiceSlice.reducer
