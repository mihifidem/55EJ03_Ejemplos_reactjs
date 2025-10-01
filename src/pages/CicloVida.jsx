import { useState, useEffect } from "react";

function CicloVida() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // 🔹 Montaje (se ejecuta solo 1 vez)
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      // 🔹 Desmontaje
      
      console.log("Componente desmontado");
    };
  }, []);

  // 🔹 Actualización (cuando cambia count)
  useEffect(() => {
    if (count > 0) {
      console.log(`El contador cambió a: ${count}`);
    }
  }, [count]);

  return (
    <div style={{ padding: "2rem", border: "1px solid #ccc" }}>
      {show ? (
        <>
          <h2>Ciclo de Vida con useEffect</h2>
          <p>Contador: {count}</p>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setShow(false)} style={{ marginLeft: "1rem" }}>
            Ocultar componente
          </button>
        </>
      ) : (
        <button onClick={() => setShow(true)}>Mostrar componente</button>
      )}
    </div>
  );
}

export default CicloVida;
