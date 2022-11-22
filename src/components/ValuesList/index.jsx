import React from 'react'
import { Card } from '../ValuesCard'
import "../../stylles/list.css"

export const Lista = ({listAll, removeCard, filter}) => {
  return (
        <ul className='ul-cards'>
        {listAll.map((element, index) => (
            <Card key={index} element={element} removeCard={removeCard} filter={filter}/>
        ))}
        </ul>
  )
}
