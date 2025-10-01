function Home(){
    return (
    <div className="redondeado container-fluid bg-primary" style={{color:"white"}}>
    <h2 className="titulo">Resumen</h2>
    <ul style={{width:"80vw",textAlign:"left"}}>
        <li><b>/contador</b>  -  Contador: Ejemplo useState</li>
        <li><b>/layout</b> -  Layout: Ejemplo evento Onclick-useState</li>
        <li><b>/products</b> -  Products: Ejemplo lectura datos + Card: props y children </li>
        <li><b>/products/:id</b> -  ProductDetail: Desde Products se accede al detalle del producto </li>
        
        <li><b>/ciclo_vida</b> -  Ciclos de vida (useEffect) <small>*abrir consola</small>
            <ol>
                <li>Montaje (<b>componentDidMount</b>) → cuando el componente aparece en pantalla.</li>
                <li>Actualización (<b>componentDidUpdate</b>) → cuando cambian props o estado.</li>
                <li>Desmontaje (<b>componentWillUnmount</b>) → cuando el componente se elimina de la interfaz.</li>
            </ol>
            <p>- También se implementa <b>renderizado condicional</b> (show)</p>
        </li>
        <li><b>/reloj</b> -  Reloj: : Ejemplo useEffect permite devolver una función de limpieza </li>
        <li><b>/temporizador</b> -  Temporizador: Ejemplo  usamos cleanup para evitar que el intervalo siga funcionando si el componente se desmonta </li>
        <li><b>/posts</b> -  Posts (API): Ejemplo  useEffect Con [] se ejecuta solo una vez al montar → ideal para peticiones iniciales </li>
        <li><b>/caja</b> -  Caja: Ejemplo  useLayoutEffect medir el ancho de un div inmediatamente después de renderizarlo </li>
        <li><b>/estilos</b> -  Estilo:
        <ol>
            <li>Inline Styles</li>
            <li>CSS tadicional (app.css</li>
            <li>CSS Modules</li>
            <li>Styled Components</li>
            <li>Emotion</li>
          {/* Tailwind (requiere configuración previa en tu proyecto) */}
            <li>Tailwind CSS</li>
        </ol>
         </li>
    

    
         
    
      
    </ul>
</div>    )

}
export default Home;