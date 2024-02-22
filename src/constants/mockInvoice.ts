export const mockInvoice = {
    id: 'AA1449',
    createdAt: '2021-10-7',
    paymentDue: '2021-10-14',
    description: 'Re-branding',
    paymentTerms: 7,
    clientName: 'Mellisa Clarke',
    clientEmail: 'mellisa.clarke@example.com',
    status: 'pending',
    senderAddress: {
        street: '19 Union Terrace',
        city: 'London',
        postCode: 'E1 3EZ',
        country: 'United Kingdom',
    },
    clientAddress: {
        street: '46 Abbey Row',
        city: 'Cambridge',
        postCode: 'CB5 6EG',
        country: 'United Kingdom',
    },
    items: [
        {
            name: 'New Logo',
            quantity: 1,
            price: 1532.33,
            total: 1532.33,
        },
        {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 2500,
            total: 2500,
        },
    ],
    total: 4032.33,
}
