import React from 'react'
import { useNavigate } from 'react-router'
import { ROUTES } from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.HOMEPAGE_ROUTE)
    }

    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <h1 className="text-7xl">Oops 404!</h1>
            <span className="cursor-pointer text-blue hover:text-navy transition-colors" onClick={() => redirectToHomePage()}>
                Homepage
            </span>
        </div>
    )
}

export default NotFoundPage
