import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { submitHandlerRed } from './FormSlice'
import { useNavigate } from 'react-router-dom'


function Forminput() {

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()
    let dispatch = useDispatch()
    
    function OnChangeUsername(e) {
        setUsername((e.target.value))
        
    }

    function OnChangePassword(e){
        setPassword(e.target.value)
       
    }

    function onSubmitHandler(){
        dispatch(submitHandlerRed({username:username,password:password}));
        navigate('/1')
    }

    // console.log(`${username} and ${password}`);
    
  return (
    <div>
      <form action="">
        <table>
            <tr>
                <td><label htmlFor="">Username : </label></td>
                <td><input type="text" onChange={(e) => OnChangeUsername(e)}/></td>
            </tr>
            <tr>
                <td><label htmlFor="">Password : </label></td>
                <td><input type="text" onChange={(e) => OnChangePassword(e)} /></td>
            </tr>
        </table>
      </form>
      <button onClick={() => onSubmitHandler()}>SUBMIT</button>

      
    </div>
    
  )
}

export default Forminput
