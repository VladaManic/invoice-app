import { render, screen } from '@testing-library/react'
import InvoiceId from './index'

test('Render invoice id', () => {
    const invoice = {
        id: '#RT3080',
        createdAt: '',
        paymentDue: '',
        description: '',
        paymentTerms: 0,
        clientName: '',
        clientEmail: '',
        status: '',
        senderAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        clientAddress: {
            street: '',
            city: '',
            postCode: '',
            country: '',
        },
        items: [],
        total: 0,
    }
    render(<InvoiceId invoice={invoice} colorTheme={'light'} />)

    // Access the invoice id value from the rendered component
    const invoiceIdElement = screen.getByText(`${invoice.id}`)
    expect(invoiceIdElement).toBeInTheDocument()
})
