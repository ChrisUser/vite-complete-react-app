/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { TextEncoder, TextDecoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })

import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router'
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
