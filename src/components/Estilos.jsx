// npm install styled-components @emotion/react clsx bootstrap

import React, { useState } from "react";
import styles from "./Estilos.module.css"; // CSS Modules
import styled from "styled-components"; // Styled Components
import { css } from "@emotion/react";   // Emotion
import clsx from "clsx";                // Clsx para clases dinámicas

// 📌 1. Inline Styles
const inlineStyle = {
  backgroundColor: "teal",
  color: "white",
  padding: "15px",
  borderRadius: "8px",
  textAlign: "center",
  margin: "10px 0",
};

// 📌 2. Styled Components
const StyledBox = styled.div`
  background-color: darkblue;
  color: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin: 10px 0;
`;

// 📌 3. Emotion
const emotionBox = css`
  background-color: darkgreen;
  color: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  margin: 10px 0;
`;

export default function Estilos() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Estilos en React</h1>

      {/* Inline styles */}
      <div style={inlineStyle}>1️⃣ Inline Styles</div>

      {/* CSS tradicional */}
      <div className="css-box">2️⃣ CSS tradicional (App.css)</div>

      {/* CSS Modules */}
      <div className={styles.moduleBox}>3️⃣ CSS Modules</div>

      {/* Styled Components */}
      <StyledBox>4️⃣ Styled Components</StyledBox>

      {/* Emotion */}
      <div css={emotionBox}>5️⃣ Emotion</div>

      {/* Tailwind (requiere configuración previa en tu proyecto) */}
      <div className="bg-pink-500 text-black p-4 rounded-lg text-center m-2">
        6️⃣ Tailwind CSS
      </div>

      {/* Bootstrap (requiere importarlo en main.jsx o index.html) */}
      <div className="alert alert-primary text-center m-2">
        7️⃣ Bootstrap
      </div>

      {/* Clsx dinámico */}
      <div
        className={clsx("dynamic-box", { active: active })}
        onClick={() => setActive(!active)}
      >
        8️⃣ Clases dinámicas con Clsx → {active ? "Activo" : "Inactivo"}
      </div>
    </div>
  );
}

