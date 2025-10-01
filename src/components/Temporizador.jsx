import { useState, useEffect } from "react";

function Temporizador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id); // limpieza
  }, []);

  return <h2>Segundos: {contador}</h2>;
}

export default Temporizador;