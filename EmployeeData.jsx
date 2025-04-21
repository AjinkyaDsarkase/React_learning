import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettingUsersData } from './EmployeeDataSlice'

function EmployeeData() {

    let [users, setUsers] = useState()
    // let [arrdata, setArrdata] = useState([])
    // let [userData, setUserData] = useState({})
    let [isClicked, setIsClicked] = useState(false)

    let updatedData = useSelector((state) => state.employeedata.singleObj)
    const dispatch = useDispatch()

    console.log(updatedData.firstname);    

    async function fetchingData() {
        const response = await fetch('https://fakestoreapi.com/users')
        const data = await response.json()
        setUsers(data)
    }
    

    function OnClickGetData(){
        dispatch(gettingUsersData(users))
        setIsClicked(false)
    }

    function OnClickDeleteHandler(){
        setIsClicked(true)
    }
    
    
    useEffect(() => {
        fetchingData()
    }, [])


  return (
    <div style={{display:'flex', width:'100%', height:'100vh', alignItems:'center', textAlign:'center', flexDirection:'column'}}>
        <button onClick={() => OnClickGetData()}>Get Data</button>
        
        <table border='1'>
            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>City</td>
                <td>Email</td>
                <td>User Name</td>
                <td>Password</td>
                <td>Action</td>
            </tr>
           {isClicked ? ( 
            <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                <td><button onClick={() => OnClickDeleteHandler()}>delete</button></td>
            </tr>) : (
            <tr>
                <td>{updatedData.firstname}</td>
                <td>{updatedData.lastname} </td>
                <td>{updatedData.city}</td>
                <td>{updatedData.email} </td>
                <td>{updatedData.username}</td>
                <td>{updatedData.password}</td>
                <td><button onClick={() => OnClickDeleteHandler()}>delete</button></td>
            </tr>
            )}
        </table>
        {
            
        }
      
    </div>
  )
}

export default EmployeeData
