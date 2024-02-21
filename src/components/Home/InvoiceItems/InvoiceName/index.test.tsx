import { render, screen } from '@testing-library/react'
import InvoiceName from './index'
import { mockInvoice } from '../../../../constants/mockInvoice'

test('Render invoice client name', () => {
    const invoice = mockInvoice
    render(<InvoiceName invoice={invoice} colorTheme={'light'} />)
    const invoiceNameElement = screen.getByText(`${invoice.clientName}`)
    expect(invoiceNameElement).toBeInTheDocument()
})
