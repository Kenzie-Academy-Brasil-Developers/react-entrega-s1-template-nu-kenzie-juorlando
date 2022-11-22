import React from "react"
import { Form } from "../../components/HomeForm"
import { TypeValue } from "../../components/TipyValue"
import "../../stylles/header.css"

export const HomePage = ({setPage, list, tipyList, addCard, listAll, removeCard, setFilter, filter}) => {
    return (
        <React.Fragment>
        <header className="Header">
        <h1 className="Title-header title1"><span className="Span-header">NU</span> Kenzie</h1>
        <button className="Button-inicio body" type="button" onClick={() => setPage("HomePage")}>Inicio</button>
        </header>
        <div className="container">
        <Form list={list} tipyList={tipyList} addCard={addCard} removeCard={removeCard} listAll={listAll}/>
        <TypeValue tipyList={tipyList} setFilter={setFilter} list={list} listAll={listAll} removeCard={removeCard} filter={filter}/>
        </div>
        </React.Fragment>
    )
}