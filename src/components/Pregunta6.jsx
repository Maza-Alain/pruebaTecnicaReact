import { useState } from "react";
import "../index.scss"
const Pregunta6 = () => {
    const [datos, setDatos] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        fecha:'',
    });
    const [rfc, setrfc] = useState('');
    const [rfcCorrecto, setRfcCorrecto] = useState(false)
    const [validadoManual, setvalidadoManual] = useState(false)
    const handleChange = (e) => {
        const {value, name } = e.target;
        setDatos({
            ...datos,
            [name]: value
        });
    }
    const validar = (e) => {
        e.preventDefault();
        const {nombre, apellido, edad, fecha} = datos;
        if (nombre.trim().length <= 1 ||
            apellido.trim().length <= 1 ||
            edad.trim().length <= 0 ||
            fecha.trim().length <= 1 ){
                setvalidadoManual (false)
            }
        else {
            setvalidadoManual(true)
        }
    }
    const handleRfc = (e) => {
        setrfc(e.target.value)
    }
    const confirmar = (e) => {
        e.preventDefault();
        const {nombre, apellido, edad, fecha} = datos;
        const primeraParte = apellido.slice(0,3);
        const segundaParte = nombre.slice(0,1);
        const anio = fecha.split('-')[0].slice(2,4);
        const mes =fecha.split('-')[1];
        const dia = fecha.split('-')[2]
        const rfcReal = primeraParte + segundaParte + anio + mes + dia;
        console.log(rfcReal);
        setRfcCorrecto(rfc === rfcReal ? true : false)
    }
    return ( 
        <div className="contenedor">
            <h2>Pregunta 6</h2>
            <p className="nota">Nota: Ya no me dio tiempo de ponerle estilos, además siendo honesto no recuerdo como usar javascript puro, pues hace años no lo uso, por lo que utilice sintaxis de react</p>
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
                            <input id="nombre" type="text" name="nombre" onChange={handleChange}/>
                        </section>
                        <section>
                            <label htmlFor="apellido">Apellido</label>
                            <input id="apellido" type="text" name="apellido" onChange={handleChange}/>
                        </section>
                    </div>
                    <div>
                        <section>
                            <label htmlFor="edad">Edad</label>
                            <input id="edad" type="number" name="edad" onChange={handleChange}/>
                        </section>
                        <section>
                            <label htmlFor="fecha">Fecha Nacimiento</label>
                            <input id="fecha" type="date" name="fecha" onChange={handleChange}/>
                        </section>
                    </div>
                    <button onClick={validar}>Validar</button>
                    {validadoManual && 
                    <div>
                    <section>
                        <label htmlFor="rfc">RFC</label>
                        <input id="rfc" type="text" name="rfc" value={rfc} onChange={handleRfc}/>
                        <button onClick={confirmar}>Confirmar</button>
                    </section>
                    </div>}
                    {rfcCorrecto && <p>El rfc es correcto</p>}

                    
                </form>
            </div>
        </div>
     );
}
 
export default Pregunta6;