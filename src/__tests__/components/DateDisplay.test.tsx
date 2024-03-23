/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateDisplay from '../../components/DateDisplay'

test('renders current date', () => {
    render(<DateDisplay />)
    ;async () => {
        const timeFormat = screen.getByText(/GMT/i)
        await waitFor(() => expect(timeFormat).toBeInTheDocument())
    }
})
