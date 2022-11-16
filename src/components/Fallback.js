import React from "react"
export const Fallback = () => {
    return <div>
         <h1 className="error-page">404</h1>
         <h3 className="went-wrong"> Something went wrong!!!</h3>
         <a href='/'><h4>Go back to home</h4></a>
        </div>
}
