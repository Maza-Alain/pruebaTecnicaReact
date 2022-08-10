import "../index.scss"
const Teoricas = () => {
    
    return ( 
        <div className="contenedor">
            <h2>Preguntas teóricas</h2>

            <section>
                <h4>1. Explica la diferencia entre '==' y '===='</h4>
                <p>En javascript un solo signo de igual “=” significa asignación, dos signos “==” significa que es igual en valor y los tres signos “===” significa que es igual en valor y tipo. Según yo solamente existe hasta el tres signos “===” no existe el de cuatro signos, por lo que me atrevo a decir que la pregunta está mal planteada. Sin embargo no me cierro a estar en un error.</p>
            </section>
            <section>
                <h4>2. ¿Cuál sería el resultado de 19+1+''75''? y explica por que</h4>
                <p>El resultado sería una concatenación de “2075” puesto que se está sumando valores numéricos con un tipo string y esto da como resultado una concatenación, no una operación matemática. También cabría la posibilidad de que el resultado se volviera completamente un string, sin realizar la primera suma, dando resultado “19175”, pero me voy más por mi primera respuesta, un string de “2075”.</p>
            </section>
            <section>
                <h4>3. ¿Cuáles son los diferentes tipos de errores en JavaScript?</h4>
                <p>No entiendo la pregunta, suelo encontrarme con varios tipos de errores, por ejemplo de sintaxis, de tipado, cuando me faltan parámetros en una función que llamo y dicha función los necesita, supongo debe existir alguna clasificación para los errores, pero la desconozco</p>
            </section>
            <section>
                <h4>7. Describe cual es el ambiente mínimo de desarrollo que necesitas para desarrollar una
                aplicación en react y los factores a considerar para llevar una aplicación a producción.
                </h4>
                <p>Para un ambiente de desarrollo, mínimo ocuparía tener corriendo el proyecto con sus variables de entorno correctamente conectadas a un backend que se encuentre también corriendo en desarrollo y conectado a una base de pruebas. En cuanto al pase a producción, previamente debe ser revisado por tu coordinador/senior y deberá pasar las pruebas ya sea de código con pruebas unitarias o si hay un área de QA serán ellos quienes lo evalúen. También se debe tener los env de producción apuntando ya no al ambiente de desarrollo ni de pruebas, si no a los servicios de producción. Una vez validado esto, se hace el merge de las ramas a master (o la rama designada a producción) para el posterior deploy al servicio de hosting o nube que se esté utilizando. </p>
            </section>
            <section>
                <h4>8. Describe que son y un ejemplo práctico donde podríamos utilizarlo.</h4>
                <h5>Redux</h5>
                <p>Es un manejador de estado de toda tu aplicación. Un ejemplo práctico sería si tienes un componente padre en donde se guarda una variable “X” y dicho componente tiene, bajo cuatro niveles más, un componente hijo que necesita dicha variable “X”. Sin el manejador de estado, redux en este ejemplo, tendríamos que comunicar mediante props en react o inputs en angular, dicha variable a través de los cuatro niveles, pero con redux, basta con llamar del store la variable y ya tendrás acceso a ella, incluso podrías acceder a las funciones que la alteren.
                </p>
                <h5>Redux Sagas</h5>
                <p>No lo se :c
                </p>
                <h5>Redux Sagas</h5>
                <p>No lo se :c
                </p>
                <h5>Redux thunk</h5>
                <p>Siguiendo la línea de explicación de redux, si con el dispatch accedes a una función que se encuentra en un slice para realizar equis función en tu aplicación, pero dicha función es asíncrona, tendrías que hacer uso de un thunk, por lo que podríamos definirlo como funciones asíncronas almacenadas en un slice.
                </p>
                <h5>Jest</h5>
                <p>Es una de las librerías más famosas de testing para javascript. Un ejemplo de uso podría ser, realizar los test unitarios de un componente, desde verificar que aparezcan los elementos del html que deben aparecer, hasta verificar que después de una acción se reciba un objeto con una estructura definida.
                </p>
                <h5>SASS y LEES</h5>
                <p>Son preprocesadores de css, no sé sus siglas, pero funcionan para dotar a css de muchas otras funcionalidades para así mejorar su escritura de código y sus facultades. Un ejemplo que me gusta mucho es, usando sass, el hecho de poder agrupar los elementos, por ejemplo si tengo un div y dentro hay un span, yo podría ponerle una clase a dicho span, pero bastaría solo con ponerla al div y dentro de él poner el span{} y así identificaría únicamente los span dentro de ese div.
                </p>
            </section>
        </div>
     );
}
 
export default Teoricas;