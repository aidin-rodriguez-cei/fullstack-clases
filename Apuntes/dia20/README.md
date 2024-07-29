# Backend

## Express.js
Es un framework para NodeJs para crear Webs y APIs. Es simple y flexible.

Ventajas:
- Rápido y minimalista
- Fácil de aprender y usar
- Tiene una gran comunidad y muchos recursos disponibles
- Altamente extensible con Middlewares

## Configuración Inicial

Instalación con Npm / Pnpm
```bash
npm init -y
npm i express
npm i nodemon -D
```

Instalación con Bun
```bash
bun init
bun i express
bun -d nodemon ó --dev nodemon
```

## Rutas y métodos HTTP

Son las URL que el servidor puede manejar. Por ejemplo "/usuarios" para obtener una lista de usuarios, o "/usuarios/133" para obtener un usuario específico. 

Los métodos HTTP son las acciones que se pueden realizar en una ruta. Las más comunes son GET, POST, PUT y DELETE. 

- GET: obtener info.
- POST: Envía info (crear).
- PUT: Actualiza info.
- DELETE: elimina info. 