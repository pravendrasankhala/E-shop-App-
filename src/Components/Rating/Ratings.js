import React from 'react'
import { FaStar } from "react-icons/fa6";

const Rating = ({rating}) => {
  return Array(5).fill().map((item , i)=> <Stars key={i} selected={rating > i}/>)
}

const Stars = ({selected})=> <FaStar color={ selected ? "red" : 'gray'}/>
export default Rating;