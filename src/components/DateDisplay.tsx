import React, { useEffect, useState } from 'react'

const DateDisplay: React.FC = () => {
    const [date, setDate] = useState('')

    /**
     * On component render sets the date state to current date and time
     */
    useEffect(() => {
        setDate(new Date().toString())
        const interval = setInterval(() => {
            setDate(new Date().toString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <span className="text-orange">{date}</span>
        </div>
    )
}

export default DateDisplay
