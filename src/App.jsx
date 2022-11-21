import { useState } from "react";
import { list, tipyList }from "./data/data"
import {HomePage} from "./pages/HomePage";
import {InicialPage} from "./pages/InicialPage"

function App() {

  const [page, setPage] = useState("")

  const [type, setType] = useState(tipyList)

  const [listAll, setListAll] = useState(list)

  const [filter, setFilter] = useState("todos")

  const filtredValue = listAll.filter((iten) => filter === "todos" ? true: iten.tipo === filter)

  function addCard(iten) {

    setListAll([...listAll,iten])

  }

  function removeCard(cardName) {

    const newList = listAll.filter(card => card.name !== cardName)
    setListAll(newList)
    
  }
  
  switch(page) {
    case "InicialPage":
      return <HomePage setPage={setPage} list={list} tipyList={tipyList} listAll={filtredValue} addCard={addCard} removeCard={removeCard} setFilter={setFilter} filter={filter}/>
      default:
        return <InicialPage setPage={setPage}/>
      } 
      
    }
    
export default App