// import React, { useEffect } from 'react'
// import { useState } from 'react'

// function Loader() {

//     let [width, setWidth] = useState(0)
//     let intervalId ;

    
//     function OnClickLoad(){
//         intervalId = setInterval(() => {
//             width += 60
//             setWidth(width)
//         }, 1000)
//     }

//     setTimeout(() => {
//             clearTimeout(intervalId)
//     }, 11000);

//     useEffect(() => {
//         OnClickLoad()
//     },[])

//     console.log(width);
    

//   return (
//     <div style={{
//         width:'100%',
//         height:'100vh',
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center'
//     }}>
//       <div style={{
//         border:'1px solid black',
//         width: '600px',
//         height:'30px'
//         }}>
//             <div style={{
//                 width: `${width}px`,
//                 height:'30px',
//                 backgroundColor:'blue'
//             }}>

//             </div>
//         </div>
//         {/* <button onClick={() => OnClickLoad()}>LOAD</button> */}
//     </div>
//   )
// }

// export default Loader

import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

function Loader() {

    let [width, setWidth] = useState(0)
    let intervalIdRef = useRef(null)

    
    function OnClickLoad(){
        if (intervalIdRef.current) return;
        intervalIdRef.current = setInterval(() => {
            setWidth((prevWidth) => prevWidth + 60)
        }, 1000)
    }


    useEffect(() => {
        OnClickLoad()
        setTimeout(() => {
            clearInterval(intervalIdRef.current)
        }, 10000);
    },[])

    console.log(width);
    

  return (
    <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }}>
      <div style={{
        border:'1px solid black',
        width: '600px',
        height:'30px'
        }}>
            <div style={{
                width: `${width}px`,
                height:'30px',
                backgroundColor:'blue'
            }}>

            </div>
        </div>
        {/* <button onClick={() => OnClickLoad()}>LOAD</button> */}
    </div>
  )
}

export default Loader
