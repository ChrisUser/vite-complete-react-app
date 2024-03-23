/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NotFoundPage from '../../pages/NotFoundPage'

test('renders error message', () => {
    render(
        <Router>
            <NotFoundPage />
        </Router>
    )
    const errorMessage = screen.getByText(/Oops 404!/i)
    expect(errorMessage).toBeInTheDocument()
})
