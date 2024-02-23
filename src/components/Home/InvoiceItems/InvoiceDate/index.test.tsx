import { render, screen } from '@testing-library/react'
import InvoiceDate from './index'
import { mockInvoice } from '../../../../constants/mockInvoice'
import { format } from 'date-fns'

test('Render invoice date', () => {
    const invoice = mockInvoice
    const date = new Date(invoice.paymentDue)
    const dateFormat = format(date, 'dd MMM y')
    render(<InvoiceDate invoice={invoice} colorTheme={'light'} />)
    const invoiceDateElement = screen.getByText(`${dateFormat}`)
    expect(invoiceDateElement).toBeInTheDocument()
})
