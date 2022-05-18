import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60} />
        <Fragmento />
        
        <ComParametro
            titulo="Situaçao do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
