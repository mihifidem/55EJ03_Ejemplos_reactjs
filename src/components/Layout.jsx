import React, { useState } from "react";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        transition: "all 0.3s ease"
      }}
    >
      <header style={{ padding: "1rem" }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: darkMode ? "#333" : "#ddd",
            color: darkMode ? "#fff" : "#000"
          }}
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
      </header>

      {/* Pasamos darkMode como prop a un hijo */}
      <Content darkMode={darkMode} />
    </div>
  );
}

// Componente hijo que recibe props
function Content({ darkMode }) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>{darkMode ? "Tema Oscuro" : "Tema Claro"}</h1>
      <p>
        Este contenido cambia de estilo según el modo seleccionado.
      </p>
    </main>
  );
}

export default Layout;
