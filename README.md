# NotaApp

**NotaApp** es una aplicación sencilla de notas desarrollada con Node.js, Express, Handlebars, sesiones y Passport para la autenticación de usuarios.

## Características

- **Gestión de Notas**: Crea, edita y elimina notas fácilmente.
- **Autenticación de Usuarios**: Regístrate e inicia sesión de manera segura con Passport.js.
- **Sesiones**: Mantén tus sesiones activas utilizando express-session.
- **Plantillas Dinámicas**: Interfaz de usuario renderizada con Handlebars para una mejor experiencia visual.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework para construir la aplicación web.
- **Handlebars**: Motor de plantillas para generar vistas dinámicas.
- **express-session**: Middleware para gestionar sesiones.
- **Passport**: Middleware de autenticación para Node.js.
- **Mongoose**: ODM para MongoDB, facilitando la interacción con la base de datos.

## Dependencias

- `bcryptjs`: ^2.4.3
- `connect-flash`: ^0.1.1
- `express`: ^4.19.2
- `express-handlebars`: ^7.1.2
- `express-session`: ^1.18.0
- `method-override`: ^3.0.0
- `mongoose`: ^8.3.5
- `passport`: ^0.7.0
- `passport-local`: ^1.0.0

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/luferino/appNotas-Nodejs.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd src
    ```

3. Instala las dependencias:
    ```bash
    npm install (dependencias)
    ```

4. Inicia la aplicación:
    ```bash
    npm run dev
    ```

5. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega una nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
