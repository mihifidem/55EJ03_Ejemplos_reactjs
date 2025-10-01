import React, { useState, useRef, useLayoutEffect } from "react";

function Caja() {
  const [ancho, setAncho] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    // Medimos el ancho del div después de que React lo haya renderizado
    const width = divRef.current.offsetWidth;
    setAncho(width);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "50%", border: "2px solid blue", padding: "20px" }}
      >
        Soy una caja con ancho dinámico
      </div>
      <p>📏 El ancho medido es: {ancho}px</p>
    </div>
  );
}

export default Caja;
