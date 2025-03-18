# Backend - App Móvil Carrito de Compras

## Descripción
Este proyecto es el backend para una aplicación móvil de carrito de compras. Proporciona una API para gestionar productos, usuarios y pedidos.

## Tecnologías
- Node.js
- Express
- MongoDB

## Instalación
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/usuario/repositorio.git
    ```
2. Navegar al directorio del backend:
    ```bash
    cd backend
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```

## Configuración
1. Crear un archivo `.env` en el directorio raíz con las siguientes variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/carrito
    JWT_SECRET=tu_secreto_jwt
    ```

## Uso
1. Iniciar el servidor:
    ```bash
    npm start
    ```
2. La API estará disponible en `http://localhost:3000`.

## Endpoints
- `GET /productos` - Obtener todos los productos
- `POST /productos` - Crear un nuevo producto
- `GET /usuarios` - Obtener todos los usuarios
- `POST /usuarios` - Crear un nuevo usuario
- `POST /login` - Iniciar sesión

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
