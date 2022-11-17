import React from "react"
const Person = ({ person }) => {
    return(
        <h1>
            HELLO {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}
        </h1>
    )
}

export default Person
