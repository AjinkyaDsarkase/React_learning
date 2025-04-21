import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {OnClickCountry} from '../Whether/WhetherSlice'


function Whether() {

    let [Data, setData] = useState()
    let [Country, setCountry] = useState('')
    let [isClicked, setIsClicked] = useState(false)

    let Condition = useSelector((state) => state.whether.condition)
    let Icon = useSelector((state) => state.whether.icon)
    let Temperature = useSelector((state) => state.whether.temp)
    let windSpeed = useSelector((state) => state.whether.wspeed)
    let Humidity = useSelector((state) => state.whether.humidity)

    const dispatch = useDispatch()

    async function fetchingData() {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0e8c527d36014ea1b1961839250402&q=London')
        const data = await response.json()
        // console.log(data);
        setCountry(data.location.country)
        setData(data)
    }
    // console.log(Country);
    
    function OnClickHandler() {
        setIsClicked(true)
        dispatch(OnClickCountry(Data))
    }

    useEffect(() => {
        fetchingData()
    }, [])

  return (
    <div style={{
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'lightblue'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'column', 
        width:'30%', 
        height:'70vh', 
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pVnsjqzpJ5ipCKqs5oQaDkmzb85MT6h6Bw&s')",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        textAlign:'center',
        padding:'20px',
        justifyContent:'space-between',
        borderRadius:'20px'
        // marginTop:'10px'
        }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:'100%'
            }}>
                <h1 style={{marginBottom:'20px', color:'white'}}>Whether Report</h1>
                <button style={{
                    border:'none',
                    borderRadius:'10px',
                    cursor:'pointer',
                    backgroundColor:'#3ad8dd',
                    height:'30px',
                    color:'white'
                }} onClick={() => OnClickHandler()} >{Country}</button>
                    {
                        isClicked ? (
                            <>  
                            <div style={{
                                display:'flex',
                                flexDirection:'column',
                                // justifyContent:'space-between',
                                height:'100%',
                                marginTop:'30px',
                                alignItems:'center',
                                color:'white',
                                justifyContent:'space-between'
                            }}>
                                <div style={{
                                    display:'flex',
                                    width:'100%',
                                    justifyContent:'center',
                                    flexDirection:'column',
                                    height:'100%',
                                    justifyContent:'space-between'
                                    
                                }}>
                                    <p style={{color:'#52b7e9', fontSize:'60px', fontWeight:'bolder'}}>{Temperature}'C</p>
                                    <div style={{display:'flex', widows:'100%', justifyContent:'center', color:'#0087ff',height:'60px'}}>
                                        <h2 style={{lineHeight:'60px'}}>{Condition}</h2>
                                        <img style={{height:'60px', width:'30%'}} src= {Icon} alt="" />
                                    </div>
                                
                                    <h2 style={{color:'#0087ff'}}>Wind Speed : {windSpeed} Kph</h2> 
                                    <h2 style={{color:'#0087ff'}}>Humidity : {Humidity}</h2>
                                </div> 
                            </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
            </div>

      </div>
    </div>
  )
}

export default Whether


