import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onClickPasswordGenerator } from './PassGeneratorSlice'

export function PassGenerator() {
    
    let dispatch = useDispatch()

    let password = useSelector((state) => state.passGenerator.password)
    // console.log(selector)

    let allChar = {special: '!@#$%^&*()-_=+\|,{};:/?', digit : '0123456789', capital : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', small:'abcdefghijlmnopqrstuvwxyz', }
    

  return (
    <div>
      <input type="text" value={password}  style={{margin:'20px'}} readOnly/>  <button onClick={() =>dispatch(onClickPasswordGenerator(allChar)) }>Generate</button>
    </div>
  )
}

export  default PassGenerator
