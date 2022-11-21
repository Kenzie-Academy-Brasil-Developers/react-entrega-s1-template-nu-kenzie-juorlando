import React from 'react'
import "../../stylles/resume.css"
import { Lista } from '../ValuesList'

export const TypeValue = ({list, listAll, tipyList, removeCard, setFilter}) => {
  return (
      <div>
      <ul className='resume-ul'>
        <h4 className='title'>Resumo Financiero</h4>
        <li className='li headline' onClick={() => setFilter("todos")}>Todos</li>
          {tipyList.map(elens => (
             <li className='li' key={elens.value} onClick={() => setFilter(elens.value)}>{elens.label}</li>
          ))}
      </ul>
          <div>
            <Lista list={list} listAll={listAll} removeCard={removeCard} setFilter={setFilter}/>
          </div>
      </div>
  )
          }