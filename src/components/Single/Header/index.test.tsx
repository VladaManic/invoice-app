/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Header from './index'
import { mockInvoice } from '../../../constants/mockInvoice'
import { Provider } from 'react-redux'
import { store } from '../../../state/store.ts'

jest.mock('../../../utils/getDefaultTheme')

// Mock the matchMedia function
;(window.matchMedia as any) = jest.fn()

test('Clicking the "Mark as Paid" button updates the status of the component', async () => {
    // Mock the return value for matchMedia
    // eslint-disable-next-line no-extra-semi
    ;(window.matchMedia as any).mockReturnValue({
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    })

    render(
        <Provider store={store}>
            <Header
                onClickPaid={undefined}
                invoice={mockInvoice}
                openDeleteModal={false}
                colorTheme={'light'}
                onClickDelete={undefined}
                onClose={undefined}
            />
        </Provider>
    )

    // Check initial status
    const markAsPaidButton = screen.getByTestId('mark-as-paid-button')
    expect(markAsPaidButton).toBeInTheDocument()

    // Click the "Mark as Paid" button
    fireEvent.click(markAsPaidButton)

    // Wait for the status to update from pending to paid
    await waitFor(
        () =>
            new Promise<void>((resolve) => {
                const statusButton = screen.getByTestId('status-button')
                if (
                    statusButton.querySelector('.font-spartanBold')
                        ?.textContent === 'Paid'
                ) {
                    resolve()
                } else {
                    setTimeout(resolve, 500)
                }
            }),
        { timeout: 5000 }
    )
})
