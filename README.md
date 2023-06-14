# Proyecto de Pruebas con Cypress

Este proyecto utiliza Cypress para realizar pruebas en una aplicación web y se conecta a una base de datos Oracle utilizando la biblioteca `oracledb`. También se utiliza `dotenv` para cargar las variables de entorno desde un archivo `.env` y `cypress-mochawesome-reporter` para generar reportes de ejecución.

## Instalación

1. Clona este repositorio en tu máquina local.

2. Abre una terminal y navega hasta la carpeta del proyecto.

3. Ejecuta el siguiente comando para instalar todas las dependencias:

```bash 
    npm install
```

4. Renombra el archivo `.env.template` a `.env` y actualiza las variables de entorno con los valores correspondientes para la conexión a la base de datos Oracle.

## Ejecución de Pruebas

1. Para abrir Cypress en modo de interfaz de usuario, ejecuta el siguiente comando:
```bash
    npx cypress open 
```
O alternativamente puedes usar el comando personalizado.
```bash
    npm run cy:open
```

   Esto abrirá la interfaz de usuario de Cypress, donde podrás seleccionar y ejecutar las pruebas manualmente.

2. Para ejecutar las pruebas en modo de línea de comandos, ejecuta el siguiente comando:
```bash
    npm test
```
   Esto ejecutará las pruebas automáticamente y mostrará el resultado en la terminal.

## Cambio de Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para la conexión a la base de datos Oracle. Para cambiar estas variables, sigue estos pasos:

1. Abre el archivo `.env` en un editor de texto.

2. Actualiza los valores de las variables `DB_USER`, `DB_PASSWORD` y `DB_CONNECT_STRING` con los valores correctos para tu entorno de base de datos.
```
    DB_USER=usuario
    DB_PASSWORD=clave
    DB_CONNECT_STRING=oracleDbHost
```


3. Guarda los cambios en el archivo.

## Reporte de Ejecución

Después de ejecutar las pruebas, se generará un reporte utilizando la biblioteca `cypress-mochawesome-reporter`. 
Podrá acceder al reporte de pruebas en la ruta [cypress/reports/html/index.html](cypress/reports/html/index.hml) desde la raíz del proyecto.
