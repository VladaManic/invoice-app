import { render, screen } from '@testing-library/react'
import InvoiceId from './index'
import { mockInvoice } from '../../../../constants/mockInvoice'

test('Render invoice client name', () => {
    const invoice = mockInvoice
    render(<InvoiceId invoice={invoice} colorTheme={'light'} />)
    const invoiceNameElement = screen.getByText(`${invoice.clientName}`)
    expect(invoiceNameElement).toBeInTheDocument()
})
