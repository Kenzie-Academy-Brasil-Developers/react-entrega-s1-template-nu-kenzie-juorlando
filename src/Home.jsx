import React from "react"
import { Form } from "./components/HomeForm"
import { Lista } from "./components/ValuesList"
import { TypeValue } from "./components/TipyValue"
import "../src/stylles/header.css"
import "../src/stylles/tipography.css"

export const HomePage = ({setPage, list, tipyList, addCard, listAll, removeCard, setFilter, filter}) => {
    return (
        <React.Fragment>
        <header className="Header">
        <h1 className="Title-header title1"><span className="Span-header">NU</span> Kenzie</h1>
        <button className="Button-inicio body" type="button" onClick={() => setPage("HomePage")}>Inicio</button>
        </header>
        <div className="Container">
        <Form list={list} tipyList={tipyList} addCard={addCard} removeCard={removeCard}/>
        <TypeValue tipyList={tipyList} setFilter={setFilter} list={list} listAll={listAll} removeCard={removeCard}/>
        {/* <Lista list={list} listAll={listAll} removeCard={removeCard} setFilter={setFilter}/> */}
        </div>
        </React.Fragment>
    )
}