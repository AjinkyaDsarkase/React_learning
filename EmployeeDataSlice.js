import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : [],
    fname : '',
    lname : '',
    city : '',
    emailId : '',
    username : '',
    password : '',
    newData : [],
    singleObj : {}
}

export const EmployeeDataSlice = createSlice({
    name : 'employeedata',
    initialState,
    reducers : {
        gettingUsersData : (state, action) => {
            state.userData = action.payload

            for (let i = 0; i < 10 ; i++) {
                state.newData.push({firstname : state.userData[i].name.firstname,
                    lastname : state.userData[i].name.lastname,
                    city : state.userData[i].address.city,
                    email : state.userData[i].email,
                    username : state.userData[i].username,
                    password : state.userData[i].password
                })
                
            }

            let oneData = state.newData[Math.floor(Math.random() * state.newData.length)];
            state.singleObj = oneData
            // console.log(state.singleObj,"###");
            
            // console.log(state.newData);
            
            // state.fname = state.userData[0].name.firstname
            // state.lname = state.userData[0].name.lastname
            // state.city = state.userData[0].name.city
            // state.emailId = state.userData[0].name.email
            // state.username = state.userData[0].name.username
            // state.password = state.userData[0].name.password
            
        }
    }
})

export const {gettingUsersData} = EmployeeDataSlice.actions
export default EmployeeDataSlice.reducer