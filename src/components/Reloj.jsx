import { useState, useEffect } from "react";
function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    // Limpieza al desmontar
    return () => clearInterval(intervalo);
  }, []);



  return <h2>Hora actual: {hora}</h2>;
}
export default Reloj;
