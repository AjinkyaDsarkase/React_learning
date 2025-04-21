// import React from 'react'
// import {  useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
// import { displayContent } from './counterSlice'
// // import { decrement, increment } from './counterSlice'

// export function Counter() {
//   // const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
//   let x = 100

//   return (
//     <div>
//       {/* <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div> */}
//       <button onClick={() => {dispatch(increment(x))}}>Increment</button>
//       <button onClick={() => {dispatch(displayContent(x))}}>Get value from GSM</button>
//       <button onClick={() => {dispatch(decrement(x))}}>Decrement</button>
//     </div>
//   )
// }

// export default Counter

import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {OnClickHandler, OnClickEditHandler, OnClickUpdateHandler, OnClickDeleteHandler} from './counterSlice'

export function Counter() {

  let [text, setText] = useState('')
  let [isEdit, setIsEdit] = useState(false)
  let [change, setChange] = useState('')

  const list = useSelector((state) => state.counter.list);

  const dispatch = useDispatch()

  function ClickSubmit() {
    dispatch(OnClickHandler(text))
    setText('')
  }

  function ClickEdit(Element) {
    setIsEdit(true)
    dispatch(OnClickEditHandler(Element))
    setText(Element)
    setChange(Element)
  }
  // console.log(change);
  
  function ClickUpdate() {
    setIsEdit(false)
    setText('')
    dispatch(OnClickUpdateHandler(change))
    
  }

  function ClickDelete(Element){
    dispatch(OnClickDeleteHandler(Element))
  }

  return (
    <div>
      <div>
        {
        isEdit ? (
          <>
          <input type="text" value={change} onChange={(e1) => setChange(e1.target.value)} />
          <button onClick={() => {ClickUpdate()}}>UPDATE</button>
          </>
        ) : (
          <>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => {ClickSubmit()}}>SUBMIT</button>
          </>
        )
        }
      </div>
      <div>
        <ul>
        {
          list.map((Element, index) => {
            return (<li>{Element} <input type="checkbox" /> <button onClick={() => {ClickEdit(Element, index)}}>Edit</button> <button onClick={() => ClickDelete(Element)}>DELETE</button></li>)
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default Counter