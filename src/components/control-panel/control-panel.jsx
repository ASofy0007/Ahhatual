import React from "react";
import "./control-panel.css";

function ControlPanel(props) {
  const { gameIniciou } = props;

  return (
    <form className="form">
      <button type="button" className="inicio">
        {" "}
        Iniciar Jogo{" "}
      </button>

      <div className="nivel">
        <fieldset className="form-group">
          <label htmlFor="niveis"> Nivel:</label>
          <select id="niveis" defaultValue="0" disabled={gameIniciou}>
            <option defaultValue value="0">
              {" "}
              Selecione...{" "}
            </option>
            <option value="1">Facil</option>
            <option value="2">Medio</option>
            <option value="3">Dificil</option>
          </select>
        </fieldset>
      </div>

      <div className="gInfo">
        <dl>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">0</dd>
        </dl>
        <dl>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
      </div>

      <button id="bTop">TOP 10</button>

      <p></p>

      <label htmlFor="newWord"> Adicione uma palavra:</label>
      <input type="text" id="newWord" size="16" placeholder="Digite..." />
    </form>
  );
}
export default ControlPanel;
