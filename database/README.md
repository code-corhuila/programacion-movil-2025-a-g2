# Database - App Móvil Carrito de Compras

## Descripción
Este proyecto contiene la configuración y los scripts necesarios para gestionar la base de datos de la aplicación móvil de carrito de compras.

## Tecnologías
- MongoDB

## Instalación
1. Instalar MongoDB siguiendo las instrucciones oficiales: [MongoDB Installation](https://docs.mongodb.com/manual/installation/)
2. Iniciar el servicio de MongoDB:
    ```bash
    mongod
    ```

## Configuración
1. Crear una base de datos llamada `carrito`:
    ```bash
    use carrito
    ```

## Scripts
1. Para importar datos iniciales, ejecutar el siguiente comando:
    ```bash
    mongoimport --db carrito --collection productos --file data/productos.json --jsonArray
    ```

## Estructura de la Base de Datos
- **Productos**: Contiene la información de los productos disponibles en la tienda.
- **Usuarios**: Contiene la información de los usuarios registrados.
- **Pedidos**: Contiene la información de los pedidos realizados por los usuarios.

## Contribuir
1. Hacer un fork del repositorio.
2. Crear una nueva rama:
    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```
3. Realizar los cambios y hacer commit:
    ```bash
    git commit -m "Agregar nueva funcionalidad"
    ```
4. Hacer push a la rama:
    ```bash
    git push origin feature/nueva-funcionalidad
    ```
5. Crear un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT.
