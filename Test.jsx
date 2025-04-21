import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CountSelector } from './TestSlice'
import Swal from 'sweetalert2'


function Test() {

    let [isChecked , setIsChecked] = useState(false)
    // let [index, setIndex] = useState()
    let [count, setCount] =useState(0)
    let [wrong, setWrong] = useState(0)

    let navigate = useNavigate()
    let dispatch = useDispatch()


    let infoObj = [
        {
            question: '1. Which of the following triangles have the same side lengths?',
            options: ['(a) Scalene', '(b) Isosceles', '(c) Equilateral', '(d) None of these'],
            answer: '(c) Equilateral'
        },
        {
            question: '2. Area of an equilateral triangle with side length a is equal to:',
            options: ['(a) (√3/2)a', '(b) (√3/2)a2', '(c) (√3/4) a2', '(d) (√3/4) a'],
            answer: '(c) (√3/4) a2'
        },
        {
            question: '3. D and E are the midpoints of side AB and AC of a triangle ABC, respectively and BC = 6 cm. If DE || BC, then the length (in cm) of DE is:',
            options: ['(a) 2.5', '(b) 3', '(c) 5', '(d) 6'],
            answer: '(b) 3'
        },
        {
            question: '4. The diagonals of a rhombus are 16 cm and 12 cm, in length. The side of the rhombus in length is',
            options: ['(a) 20 cm', '(b) 8 cm', '(c) 10 cm', '(d) 9 cm'],
            answer: '(c) 10 cm'
        },
        {
            question: '5. If perimeter of a triangle is 100 cm and the length of two sides are 30 cm and 40 cm, the length of third side will be:',
            options: ['(a) 30 cm', '(b) 40 cm', '(c) 50 cm', '(d) 60 cm'],
            answer: '(a) 30 cm'
        },
        {
            question: '6. If triangles ABC and DEF are similar and AB=4 cm, DE=6 cm, EF=9 cm and FD=12 cm, the perimeter of triangle ABC is:',
            options: ['(a) 22 cm', '(b) 20 cm', '(c) 21 cm', '(d) 18 cm'],
            answer: '(d) 18 cm'
        },
        {
            question: '7. The height of an equilateral triangle of side 5 cm is:',
            options: ['(a) 4.33 cm', '(b) 3.9 cm', '(c) 5 cm', '(d) 4 cm'],
            answer: '(a) 4.33 cm'
        },
        {
            question: '8. If ABC and DEF are two triangles and AB/DE=BC/FD, then the two triangles are similar if',
            options: ['(a) ∠A=∠F', '(b) ∠B=∠D', '(c) ∠A=∠D', '(d) ∠B=∠E'],
            answer: '(b) ∠B=∠D'
        },
        {
            question: '9. Which of the following are not similar figures?',
            options: ['(a) Circles', '(b) Squares', '(c)Equilateral triangles', '(d) Isosceles triangles'],
            answer: '(d) Isosceles triangles'
        },
        {
            question: '10. In triangle ABC, ∠BAC = 90° and AD ⊥ BC. Then',
            options: ['(a) BD . CD = BC2', '(b) AB . AC = BC2', '(c) BD . CD = AD2', '(d) AB . AC = AD2'],
            answer: '(c) BD . CD = AD2'
        },
    ]

    function onChangeHandler(event){
        setIsChecked(event.target.value)
    }

    function radioFunction(option, index) {
        if (option === infoObj[index].answer) {
            setCount(count + 1)
        }else{
            setWrong(wrong + 1)
        }
    }

    console.log("right", count);
    console.log('wrong', wrong);
    
    

    function OnClickHandler(){
        dispatch(CountSelector({count, wrong}))
        Swal.fire({
            title: 'Do you want to submit?',
            icon: 'question',
            showDenyButton:'true',
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
          }).then((result) => {
            if (result.isConfirmed) {
                navigate('/1')
            } else if (result.isDenied) {
                navigate('/')
            }
          })
        }    

    

    return (
        <div style={{
            width: '80%',
            height: '100%',
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            padding: '30px',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '1500px',
                justifyContent: 'space-between'
            }}>
                {
                    infoObj.map((Element, index) => (
                        <>
                            <p>{Element.question}</p>
                            {
                                Element.options.map((option, i) => (
                                    <div>
                                        <table>
                                            <tr>
                                                <td><input type="radio" onChange={(event) => {onChangeHandler(event)
                                                radioFunction(option, index)}
                                                } /> {option}</td>
                                            </tr>
                                        </table>
                                    </div>
                                ))
                            }
                        </>
                    ))
                }

            </div>
            <button style={{
                marginTop: '30px'
            }} onClick={()=>{ OnClickHandler()
                // navigateToResult()
            }}>SUBMIT</button>

            
        </div>
    )
}

export default Test
