import { render, screen } from '@testing-library/react'
import Page404 from './index'

test('Render page 404', () => {
    render(<Page404 />)
    const elem404 = screen.getByText('Page404')
    expect(elem404).toBeInTheDocument()
})
