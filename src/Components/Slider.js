/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill,} from 'react-icons/bs'

function Slider(props) {
    const[slide,setSlide]=useState(0)
    const nextslide=()=>{
        setSlide(slide===props.data.slides.length-1 ? 0:slide+1)
    }

    const prevSlide=()=>{
        setSlide(slide=== 0? props.data.slides.length-1 :slide-1)
    }

    console.log(props.data.slides)
  return (
    <>
    <div className='carousel'>
    <BsArrowLeftCircleFill className='icon-left' onClick={nextslide}/>
     {props.data.slides&&props.data.slides.map((item,i)=>{
         return <div><img src={item.src} key={i} className={slide === i ? "slides":" slides slides-hidden"}/></div>
     })}

      
    <BsArrowRightCircleFill className='icon-right' onClick={prevSlide}/>
    </div>
    </>
  )
}

export default Slider