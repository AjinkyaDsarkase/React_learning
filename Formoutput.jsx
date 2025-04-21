import React from 'react'
import { useSelector } from 'react-redux'

function Formoutput() {

    let username = useSelector((state) => state.form.username)
    let password = useSelector((state) => state.form.password)

    return (
        <div>
            <h1>Form Data</h1>
            <p>Username : {username}</p>
            <p>Password : {password}</p>
        </div>
    )
}

export default Formoutput
