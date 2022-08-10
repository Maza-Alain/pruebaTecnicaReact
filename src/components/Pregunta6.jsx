import { useState } from "react";
import "../index.scss"
const Pregunta6 = () => {
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        fecha:''
    })
    return ( 
        <div className="contenedor">
            <h2>Pregunta 6</h2>
            <section>
                <p>Desarrollar con HTML , js , ES6 una aplicacion que le pida al usuario:</p>
                <p>*Nombre, Apellido Paterno , Apellido Materno, Edad , Fecha de nacimiento y un
                campo validar (Generar las validaciones que consideres apropiadas para los
                campos anteriores)</p>
                <p>*Si pasa las validaciones le mostraras un campo extra para que pueda acceder su
                RFC sin homoclave y un botón confirmar. </p>
                <p>*Al darle click en confirmar tendrá que evaluar que sea un RFC y segundo que el
                RFC sea correcto conforme a los datos que accedió.</p>
            </section>
            <div>
                <form>
                    <div>
                        <section>
                            <label htmlFor="nombre">Nombre</label>
                            <input id="nombre" type="text" />
                        </section>
                        <section>
                            <label htmlFor="apellido">Apellido</label>
                            <input id="apellido" type="text" />
                        </section>
                    </div>
                    <div>
                        <section>
                            <label htmlFor="edad">Edad</label>
                            <input id="edad" type="number" />
                        </section>
                        <section>
                            <label htmlFor="fecha">Fecha Nacimiento</label>
                            <input id="fecha" type="date" />
                        </section>
                    </div>
                    <button>Validar</button>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Pregunta6;