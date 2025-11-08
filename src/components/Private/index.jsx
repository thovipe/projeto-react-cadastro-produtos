import { useState } from "react";
import { NavLink } from "react-router-dom";
import './private.modules.css'

export default function Private() {
  const [login, SetLogin] = useState(false);

  if(!login) {
    return (
      <div className="login-container">
        <button onClick={() => {SetLogin(true)}}>
          Fazer Login
        </button>
      </div>
    )
  }
  
  return (
    <div className="private">
      <h3>Informações sobre a aplicação:</h3>
      <ul>
        <li>
          <strong>Endpoint Utilizado:</strong> https://api.restful-api.dev/
        </li>
        <li>
          <strong>Documentação:</strong> <NavLink to="https://www.restful-api.dev/" >RestFul-Api</NavLink>
        </li>
        <li>
          <strong>Autor:</strong> Thomas Pereira
        </li>
      </ul>
    </div>
  )
}