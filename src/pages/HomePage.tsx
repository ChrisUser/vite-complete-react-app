import React from 'react'
import DateDisplay from '../components/DateDisplay'

const HomePage: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <h1 className="text-7xl">Hello world!</h1>
            <DateDisplay />
        </div>
    )
}

export default HomePage
