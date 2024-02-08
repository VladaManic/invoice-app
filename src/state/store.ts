import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './invoice/invoiceSlice'
import themeReducer from './theme/themeSlice'

export const store = configureStore({
    reducer: {
        invoice: invoiceReducer,
        theme: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
