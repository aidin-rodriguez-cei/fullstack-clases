# Terminal

```bash
# Listar archivos y directorios
ls
dir

# Crear un directorio 
mkdir nombre-carpeta

# Cambiar de directorio
cd nombre-carpeta

# Crear nuevo archivo en Mac
touch nombre-archivo

# Posibles opciones para crear archivos (en windows)
type null > nombre-archivo.ext
echo. > nombre-archivo.ext

# Movimientos entre carpetas 
cd nombre-carpeta

# Ir a la raiz de nuestro sistema
cd /

# En windows me puedo mover entre discos usando C:, D:, X:  
C:

# Volver una o varias carpetas 
cd . #me quedo en el mismo lugar
cd ..
cd ../../../
cd ../usuarios/ejemplo/mi-carpeta

# Limpiar la terminal
clear
Command+K #Shortcut de teclado


```


```html
<!-- siempre referenciamos desdes ./ -->

<script src="./js/mi-script.js">
```

# Que es Node? 

Node.js es un entorno de ejecución de JavaScript que permite ejecutar código en el servidor (backend). 

```bash
#Ejecutar un archivo de JS
node mi-script.js

```

# ¿Qué es NPM?

NPM (Node Package Manager) es el administrador de paquetes que viene por defecto en Node. Los paquetes son mòdulos de còdigo que se pueden instalar y usar en nuestros proyectos. Por ejemplo `express`, `axios`, `nodemon`, `chalk`, `moment`, etc. 

https://www.npmjs.com/

Bun es un conjunto de herramientas rápidas todo en uno para ejecutar, crear, probar y depurar JavaScript y TypeScript. 
https://bun.sh/


```bash
# Crear mi archivo package.json
npm init
npm init -y

# Instalar un paquete nuevo
npm intall nombre-paquete
npm i nombre-paquete

#Definir la versión que queremos: ej 1.0.0
npm i nombre-paquete@1.0.0

# Desistalar un paquete
npm uninstall nombre-paquete

# Actualizar los paquetes a su última versión
npm update
npm update nombre-paquete

# Flag -g instala el paquete en todo mi servidor y proyectos 
npm i nombre-paquete -g

# Flag - D para instalar dependencias de desarrollador 
npm i nombre-paquete --save-dev
npm i nombre-paquete -D
```

Nuestro package.json posee la habilidad de correr SCRIPTS.
Podemos crear nuestros propios scripts, como por ej: `start, dev, test, etc`

```js
{
  "name": "mi-primer-proyecto",
...,
  "scripts": {
    "start": "node mi-script.js",
    "dev": "nodemon mi-script.js",
    "build": "crer una versión final para subir al servidor",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}

// y se ejecuta con "npm run start" o "npm run dev"
// salir control cc o command cc
```

