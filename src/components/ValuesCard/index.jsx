import React from "react";
import "../../stylles/list.css";

export const Card = ({ element, removeCard, filter }) => {
  return (
    <li
      className={
        element.tipo === "entrada"
          ? "li-card li-card-color"
          : "li-card li-card-color-out"
      }
    >
      <div className="name-tipo">
        <h3 className="name title3">{element.name}</h3>
        <p className="tipo body">{element.tipo}</p>
      </div>
      <div className="valor-button">
        <p className="valor body">R${element.valor}</p>
        <button
          className="button-remover body"
          type="button"
          onClick={() => removeCard(element.name)}
        ></button>
      </div>
    </li>
  );
};
