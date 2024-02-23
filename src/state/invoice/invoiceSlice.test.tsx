/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, waitFor } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { createInvoice } from './invoiceSlice'
import deepFreeze from 'deep-freeze'
import { mockInvoice } from '../../constants/mockInvoice'
import { invoiceReducer } from '../store'

jest.mock('../../utils/getDefaultTheme')

// Mock the matchMedia function
;(window.matchMedia as any) = jest.fn()

describe('Invoice Reducer', () => {
    it('Should update the store correctly when a new invoice is created', async () => {
        // Mock the return value for matchMedia
        // eslint-disable-next-line no-extra-semi
        ;(window.matchMedia as any).mockReturnValue({
            matches: false,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        })

        // Manually create the store with the real reducer
        const store = configureStore({
            reducer: invoiceReducer,
        })

        // Ensure the reducer is immutable using deep-freeze
        deepFreeze(store.getState())

        await act(async () => {
            // Dispatch the createInvoice action with a single object
            await store.dispatch(createInvoice(mockInvoice))
        })

        // Wait for the state to be updated
        await waitFor(
            () =>
                new Promise<void>((resolve) => {
                    const state = store.getState()
                    // Adding new invoice into previously empty array
                    if (state.invoices.length === 1) {
                        resolve()
                    } else {
                        setTimeout(resolve, 500)
                    }
                }),
            { timeout: 5000 }
        )
    })
})
