import calculateTotal from './calculateTotal'
import { mockInvoice } from '../constants/mockInvoice'

describe('calculateTotal', () => {
    // Check if the result is a float
    test('Calculating float value for total amount', () => {
        const invoice = mockInvoice
        const result = calculateTotal(invoice)
        expect(result).toEqual(expect.any(Number))
        // Check if result is not integer, so it's float
        expect(Number.isInteger(result)).toBe(false)
    })

    // For an empty invoice, the result should be 0
    test('Calculating total with empty invoice', () => {
        const invoice = { items: [] }
        const result = calculateTotal(invoice)
        expect(result).toEqual(0)
    })

    // Calculated total should be equal to total value from invoice json data
    test('Calculating total with non-empty invoice', () => {
        const invoice = mockInvoice
        const result = calculateTotal(invoice)
        expect(result).toEqual(invoice.total)
    })
})
