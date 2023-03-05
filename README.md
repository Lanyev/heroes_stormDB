# Descripción de la aplicación

Esta es una aplicación Node.js que proporciona una API REST para un juego de rol (RPG). La aplicación utiliza Express y se conecta a una base de datos PostgreSQL. La aplicación permite el registro e inicio de sesión de usuarios, y permite a los usuarios agregar y ver información sobre su personaje, incluido el tanque, daño y salud. También hay una ruta para agregar y ver información sobre héroes del juego.

## Estructura de la aplicación

La aplicación consta de las siguientes carpetas:

- `auth`: contiene archivos relacionados con la autenticación de usuarios.
- `users`: contiene archivos relacionados con la información de los usuarios.
- `tank`: contiene archivos relacionados con la información del tanque del personaje.
- `damage`: contiene archivos relacionados con la información del daño del personaje.
- `heal`: contiene archivos relacionados con la información de la salud del personaje.
- `heroes`: contiene archivos relacionados con la información de los héroes del juego.
- `models`: contiene archivos relacionados con la definición de los modelos de la base de datos.
- `utils`: contiene archivos utilitarios, como el manejo de respuestas y la conexión a la base de datos.

## Uso

Para utilizar la aplicación, siga estos pasos:

1. Clone el repositorio.
2. Configure la base de datos en el archivo `config.js`.
3. Instale las dependencias con `npm install`.
4. Inicie la aplicación con `npm run dev`.

## Rutas

La aplicación tiene las siguientes rutas:

- `/api/v1/auth`: contiene rutas relacionadas con la autenticación de usuarios.
- `/api/v1/users`: contiene rutas relacionadas con la información de los usuarios.
- `/api/v1/tank`: contiene rutas relacionadas con la información del tanque del personaje.
- `/api/v1/damage`: contiene rutas relacionadas con la información del daño del personaje.
- `/api/v1/health`: contiene rutas relacionadas con la información de la salud del personaje.
- `/api/v1/heroes`: contiene rutas relacionadas con la información de los héroes del juego.

## Créditos y fuentes

La aplicación se creó desde cero y no se basa en ninguna otra fuente. La información de la aplicación es ficticia y no se basa en ningún juego de rol real.
