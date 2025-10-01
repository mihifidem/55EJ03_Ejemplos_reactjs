import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contador from './components/Contador';
import Layout from './components/Layout';
import Products from './pages/Products';
import ProductDetail from "./pages/ProductDetail";
import CicloVida from './pages/CicloVida';
import Reloj from './components/Reloj';
import Temporizador from './components/Temporizador'
import Posts from './components/Posts';
import Caja from './components/Caja';

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () =>
  //   setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <>
   
   <Link to='/'>Inicio</Link> | {"  "}
   <Link to='/contador'>Contador</Link> | {"  "}
   <Link to='/layout'>dia/noche</Link> | {"  "}
   <Link to='/products'>Products</Link> | {"  "}
   <Link to='/ciclo_vida'>Ciclo de vida</Link> | {"  "}

   <Link to='/reloj'>Reloj</Link> | {"  "}
   <Link to='/temporizador'>Temporizador</Link> | {"  "}
   <Link to='/posts'>Posts API</Link> | {"  "}
   <Link to='/caja'>Caja</Link> | {"  "}

 <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/ciclo_vida" element={<CicloVida />} />
        <Route path="/reloj" element={<Reloj />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/caja" element={<Caja />} />

        <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 - Página no encontrada</h2>} />

    </Routes>
    </>
  )
}

export default App
