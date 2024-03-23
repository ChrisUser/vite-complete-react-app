import { render, screen } from '@testing-library/react'
import DateDisplay from '../../components/DateDisplay'

test('renders current date', () => {
    render(<DateDisplay />)
    const timeFormat = screen.getByText(/GMT/i)
    expect(timeFormat).toBeInTheDocument()
})
