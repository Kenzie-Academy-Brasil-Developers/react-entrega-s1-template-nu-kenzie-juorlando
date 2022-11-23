import React from "react";
import "../../stylles/resume.css";
import { Lista } from "../ValuesList";

export const TypeValue = ({
  list,
  listAll,
  tipyList,
  removeCard,
  setFilter,
  filter,
}) => {
  return (
    <div className="div-container">
      <ul className="resume-ul">
        <h4 className="title">Resumo Financiero</h4>
        <a href="#a" type="">
          <button
            className={filter === "todos" ? "li btn-color" : "li"}
            onClick={() => setFilter("todos")}
          >
            Todos
          </button>
          <button
            className={filter === "entrada" ? "li btn-color" : "li"}
            key={tipyList[0].value}
            onClick={() => setFilter(tipyList[0].value)}
          >
            {tipyList[0].label}
          </button>
          <button
            className={filter === "saída" ? "li btn-color" : "li"}
            key={tipyList[1].value}
            onClick={() => setFilter(tipyList[1].value)}
          >
            Despesas
          </button>
        </a>
      </ul>
      <div className="list-container">
        <Lista
          list={list}
          listAll={listAll}
          removeCard={removeCard}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </div>
  );
};
