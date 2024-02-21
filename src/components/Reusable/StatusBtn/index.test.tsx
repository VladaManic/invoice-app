import { render, screen } from '@testing-library/react'
import StatusBtn from './index'
import { mockInvoice } from '../../../constants/mockInvoice'

test('Render invoice status', () => {
    const invoice = mockInvoice
    render(<StatusBtn invoice={invoice} colorTheme={'light'} />)
    const invoiceStatusElement = screen.getByText(`${invoice.status}`)
    expect(invoiceStatusElement).toBeInTheDocument()
})
