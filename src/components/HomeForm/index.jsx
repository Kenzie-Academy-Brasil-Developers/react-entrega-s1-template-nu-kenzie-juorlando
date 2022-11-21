import React from 'react'
import { useState } from 'react'
import "../../stylles/form.css"

export const Form = ({list, tipyList, addCard, removeCard}) => {
    
    const [formCard, setFormCard] = useState({
        name: "",
        valor: "",
        tipo: tipyList[0].value,
    })
    
    function submit(event){
        
        event.preventDefault();
        
        addCard(formCard)
        
        setFormCard({
            name: "",
            valor: "",
            tipo: tipyList[0].value,
        })
    }

  return (
        <form className='form' onSubmit={submit}>
            <p className='description'>Descrição</p>
            <input className='input-name' type="text" value={formCard.name} placeholder='Digite aqui sua Descrição' onChange={(event) => setFormCard({...formCard, name: event.target.value})}/>
            <p className='description-exemple'>Ex: Compras de Roupas</p>
            <div className='div-title-input-select'>
            <p className='description-valor'>Valor</p>
            <p className='description-tipo'>Tipo de Valor</p>
            </div>
            <div className='div-input-select'>
            <input className='input-valor' type="number" value={formCard.valor} placeholder="R$" onChange={(event) => setFormCard({...formCard, valor: event.target.valueAsNumber})}/>
            <select className='select' defaultValue={formCard.tipo} onChange={(event) => setFormCard({...formCard, tipo: event.target.value})}>
                {tipyList.map(tipo => (
                    <option className='option' key={tipo.value} value={tipo.value}>{tipo.label}</option>
                ))}
            </select>
            </div>
            <div className='div-button'>
            <button className='button-submit' type='submit'>Inserir Valor</button>
            </div>
            <div className='div-valor-total'>
                <div className='div-valor-total-title'>
                <p className='valor-total'>Valor Total:</p>
                <p className='total'>${}</p>
                </div>
                <p className='valor-total-text'>O valor total se refere ao saldo</p>
            </div>
    </form>
  )
}

