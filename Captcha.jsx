import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CaptchaGenerator } from './CaptchaSlice'

function Captcha() {
  let [text, setText] = useState('')
  let [isCorrect, setIsCorrect] = useState("")
  const dispatch = useDispatch()
  const Captcha = useSelector((state) => state.captcha.input) 
  const Check = useSelector((state) => state.captcha.checkText) 

  let characters = {digit : '0123456789', capital : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', smallLetters:'abcdefghijlmnopqrstuvwxyz'}
 

  function OnClickGeneratePass(characters){
    dispatch(CaptchaGenerator(characters))
  }

  function OnClickSubmit(){
    // dispatch(Checker(text))
    if(text === Captcha){
      setIsCorrect("true")
    }else {
      setIsCorrect("false")
    }
  }

  // function EqualityCheck(){
  //   if (text === Check) {
      
  //   }
  // }
  // useEffect(() => {
  //   EqualityCheck()
  // }, [OnClickSubmit])

  return (
    <div style={{ 
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>
      <div style={{ width: '30%', 
        height: '30vh', 
        display: 'flex', 
        flexDirection: 'column', 
        border: '1px solid black', 
        backgroundColor: 'grey', 
        padding:'30px', 
        alignItems:'center',
        justifyContent:'space-between' 
        }}>
          <div style={{display:'flex', width:'100%', height:'50px',justifyContent:'space-evenly'}}>
            <input value={Captcha} style={{width:'40%', height:'50px', textAlign:'center',fontSize:'20px', backgroundColor:'ButtonFace', fontFamily:'cursive', lineHeight:'150px'}} type="text" readOnly />

            <button onClick={() => OnClickGeneratePass(characters)} style={{cursor:'pointer', height:'30px', fontSize:'20px', width:'40%', border:'none',borderRadius:'10px', marginTop:'10px'}}>Generate</button>
          </div> 
          <div style={{
            display:'flex',
            width:'100%',
            height:'50px',
            justifyContent:'space-evenly'
          }}>
            <input type="text" onChange={(e) => setText(e.target.value)} style={{width:'40%', height:'50px', textAlign:'center',fontSize:'20px', backgroundColor:'ButtonFace', fontFamily:'cursive', lineHeight:'150px'}} />
            <button style={{cursor:'pointer', height:'30px', fontSize:'20px', width:'40%', border:'none',borderRadius:'10px', marginTop:'10px'}} onClick={() => OnClickSubmit()}>Submit</button>
          </div>
          {isCorrect=="true" ? (
            <>
            <p>Correct !</p>
            </>
          ) : isCorrect=="false" ?  (
            <>
            <p>Incorrect !</p>
            </>
          ): isCorrect=="" ? <>
          <p></p>
          </> : ""}
      </div>
    </div>
  )
}

export default Captcha
