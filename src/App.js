import React from 'react'
import './index.css'

let curDate = new Date()
curDate = curDate.getHours()

const greeting = (Date) => {
    if ( Date < 12)
        return <h1>Hello, <span className="morning"> Good morning </span></h1>
    else if( Date < 19)
        return <h1> Hello, <span className="evening"> Good evening </span></h1>
    else
        return <h1> Hello, <span className="night"> Good night </span></h1>
}

const App = () => {
    return (
        <div className="hero">
            {greeting(curDate)}
        </div>
    )
}

export default App

