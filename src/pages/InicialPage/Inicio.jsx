import  illustration from "../src/assets/img/illustration.svg"
import "../src/stylles/inicial.css"
import "../src/stylles/tipography.css"

export const InicialPage = ({setPage}) => {

    return (
        <div className="App">
          <div className="Div-inicial">
            <h2 className="Title title2"><span className="Span">NU</span> Kenzie</h2>
            <h1 className="Text-title title1">Centralize o controle de suas finanças</h1>
            <p className="Text headline">de forma rápida e segura</p>
            <button className="Button-iniciar headline" type="button" onClick={() => setPage("InicialPage")}>Iniciar</button>
          </div>
          <div className="Div-Img">
            <img className="Img-inicial" src={illustration} alt="ilustração"/>
          </div>
        </div>
      );

}