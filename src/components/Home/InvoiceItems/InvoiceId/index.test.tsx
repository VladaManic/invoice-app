import { render, screen } from '@testing-library/react'
import InvoiceId from './index'
import { mockInvoice } from '../../../../constants/mockInvoice'

test('Render invoice id', () => {
    const invoice = mockInvoice
    render(<InvoiceId invoice={invoice} colorTheme={'light'} />)
    const invoiceIdElement = screen.getByText(`${invoice.id}`)
    expect(invoiceIdElement).toBeInTheDocument()
})
