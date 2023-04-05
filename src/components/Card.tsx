import React from 'react'
import { DATA } from '../data/Data'
import './Card.css'

export const Card = () => {
  return (
    <ul className='awards'>
      {
       DATA.map((item) => (
        <li key={item.id}>
         <img src={item.img} alt="" />
         <p>{item.title}</p>
        </li>
       ))
      }
    </ul>
  )
}
