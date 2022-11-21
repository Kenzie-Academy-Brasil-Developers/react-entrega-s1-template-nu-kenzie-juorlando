import React from 'react'
import "../../stylles/list.css"
import "../../stylles/tipography.css"

export const Card = ({element, removeCard}) => {
  return (
    <li className='li-card'>
        <div className='name-tipo'>
        <h3 className='name title3'>{element.name}</h3>
        <p className='tipo body'>{element.tipo}</p>
        </div>
        <div className='valor-button'>
        <p className='valor body'>R${element.valor}</p>
        <button className='button-remover body' type='button' onClick={() => removeCard(element.name)}></button>
        </div>
    </li>
  )
}
