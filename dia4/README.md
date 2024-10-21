# Repaso de JS (Métodos de Arrays)

```js
const listaColores = ["rojo", "azul", "verde"];

const listaMagos = [
    {nombre: "Harry", apellido:"Potter", casa:"Gryffindor"},
    {nombre: "Hermiony", apellido:"Granger", casa:"Gryffindor"},
    {nombre: "Draco", apellido:"Malfoy", casa:"Slytherin"},
    {nombre: "Jhon", apellido:"Deer", casa:"Hufflepuff", atacar: ()=> {}}
]

listaMagos[3].atacar();

```

# Devolución Métodos de arrays

- .forEach() // No devuelve nada
- .map()     // ARRAY(modifica al array original)
- .filter()  // ARRAY con los elementos que cumplan una función (ej: "edad > 18")
- .some()    // Booleano (true/false) -  si alguno cumple la condición 
- .every()   // Booleano (true/false) - si todos cumplen la condición
- .findeIndex()  // INDICE (num) del elemento que cumpla la condición


Ejemplo devolver una lista con todos los magos de Gryffindor
```js
const listaMagosGryffindor = listaMagos.filter(mago => mago.casa == "Gryffindor");
const objetoMagoHarry = listaMagos.filter(mago => mago.nombre == "Harry");
```

## Template Strings

```js
const nombre="Laura";

let miTexto="Hola mi nombre es"+nombre

```