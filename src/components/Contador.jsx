import { useState } from "react";

function Contador(){
const [contador, setContador] = useState(0);

function sumar(){
    setContador(contador+1);
}
function restar(){
    setContador(contador-1);
}

function reset(){
    setContador(0);
}

return (
        <>
        <h2>Contador {contador}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}

export default Contador;