import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { InitialStateObj } from '../../types/interfaces'

const initialState: InitialStateObj = {
    loading: false,
    invoices: [],
    error: '',
}

//Generates pendind, fullfiled and rejcted action types
export const fetchInvoices = createAsyncThunk('invoice/fetcInvoices', () => {
    return axios
        .get('http://localhost:3004/invoices')
        .then((response) => response.data)
})

//Filtering by invoice status
export const fetchInvoicesByStatus = createAsyncThunk(
    'invoice/fetcInvoicesByStatus',
    (invoiceStatus: string) => {
        return axios
            .get('http://localhost:3004/invoices?status=' + invoiceStatus)
            .then((response) => response.data)
    }
)

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
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
    },
})

export default invoiceSlice.reducer
