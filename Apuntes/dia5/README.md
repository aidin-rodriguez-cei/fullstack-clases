# CommonnJS y ECMAScript Modules (ESM)

En JS, los módulos son porciones de código reutilizable que se pueden importar y exportar entre diferenres archivos. Estos permiten organizar y reutilizar el código de manera eficiente. 

## CommonJS

Fue creado para Node.Js (nuestro entorno de Backend)

- Se cargan de manera síncrona (es decir, el programa espera a que el módulo cargue antes de continuar)
- No es común pero se puede usar en el navegador con la ayuda de herramientas como Browserify / WebPack / Parcel. 


### Importación de elementos 

```js
// -----------------------------------
// importación de un solo elemento
// -----------------------------------

// archivo1.js
const mensaje="Hola Mundo";
module.exports = mensaje;

// archivo2.js
const mensaje = require("./archivo1");
console.log(mensaje); //Hola mundo

// -----------------------------------
// importanción de múltiples elementos
// -----------------------------------

// archivo1.js
const mensaje1="Hola Alumnos";
const mensaje=2"Adios Alumnos";
module.exports = {mensaje1, mensaje2}; // exportamos objeto

// archivo2.js
const {mensaje1, mensaje2} = require("./archivo1"); // importamos con {} porque es un objeto  
console.log(mensaje1); //Hola Alumnos

```

### Deconstrución de Objetos 

```js
const alumnos = {
    nombre: "Laura",
    edad: 23,
    asignatura: "Full Stack"
}
imprimir(props)

// Forma tradicional / vieja 
function imprimir(props){
//     const edad = props.edad;
//     const nombre = props.nombre;
//     const asignatura = props.asignatura;

const nombre= "Juanito"

// Forma de Deconstrución de objeto
// incluyendo renombrar la variable "nombre" por "miNombre" ya que la estaba usando de antes. 
const {edad, nombre:miNombre, asignatura} = props;

console.log(`Mi nombre es ${miNombre}, tengo ${edad} años, y estoy en la materia de ${asignatura}`)

}
```

## ECMAScript ES6 / ESM

Fue introducido en ECMAScript 2015 (ES6) para estandarizar los módulos de JS.
Se usa tanto para frontEnd (navegadores) como para backEnd (NodeJS).

- Los módulos se cargan de manera asíncrona, es decir, el programa puede continuar mientras los módulos de cargan.
- Soportado en Navegadores modernos y en versiones recientes de NodeJS.

```js
// archivo1.js
const mensaje1 = "Hola Alumnos";
const mensaje2 = "Chau Alumnos"; 
export const mensaje2 = "Chau Alumnos"; //los exports se importan con {}
export const mensaje3 = "Volvi"; 
export default mensaje1; //exports default, no usa llaves en el import

// archivo2.js
import mensaje1 from "./archivo1"; //import de default va sin llaves {}

import miMensaje from "./archivo1"; //import mensaje1 renombrando a miMensaje 
import {mensaje2, mensaje3} from "./archivo1";

console.log(mensaje1, miMensaje, mensaje1, mensaje3)
// "Hola Alumnos", "Hola Alumnos", "Chau Alumnos", "Volvi" 

```

Para definir que sistema utilizaremos haremos lo siguiente: 
en el backend modificamos nuestro archivo package.json usando la propiedad `"type"="module"`

```json
{
  "name": "Proyecto con ES6",
  "main": "index.js",
  "Type": "module",
  "scripts": {
    "start": "node index.js",
    "Dev": "nodemon index.js",
  }
}
```

En el frontEnd tenemos que cambiar nuestras etiquetas de scripts

```html
<script type="module" src="./js/mi-script.js">
```