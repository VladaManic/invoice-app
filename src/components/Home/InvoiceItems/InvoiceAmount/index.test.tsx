import { render, screen } from '@testing-library/react'
import InvoiceId from './index'
import { mockInvoice } from '../../../../constants/mockInvoice'

test('Render invoice amount', () => {
    const invoice = mockInvoice
    const amount = parseFloat(invoice.total.toString()).toFixed(2)
    render(<InvoiceId invoice={invoice} colorTheme={'light'} />)
    const invoiceNameElement = screen.getByText(`${amount}`)
    expect(invoiceNameElement).toBeInTheDocument()
})
