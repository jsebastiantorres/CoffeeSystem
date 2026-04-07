
**COFFEE SYSTEM**
Proyecto académico desarrollado para la materia Desarrollo Backend. Se trata de un sistema orientado a la gestión de ventas en una cafetería, construido inicialmente con HTML, CSS (utilizando el framework Tailwind) y JavaScript. En su siguiente fase, se implementará el backend con ExpressJS sobre Node.js, con el objetivo de integrar funcionalidades dinámicas y robustas para la administración de datos y procesos de venta.




**Info de sistema**

# Tecnologias Implementadas en el proyecto  

## Frontend (ya configurados en el proyecto con un CDN)
    **Framework CSS:** Tailwind CSS
    **Iconos:** fontawesome

## Backend (necesario instalar NodeJS)
    Instalar NODEJS en el sistema
    NodeJS v22.14.0 
    
    Instalacion Express.js
    **proceso en \APP desde consola:**
    1. npm init -y
    2. npm install express
    3. npm install --save-dev nodemon // reiniciar la applicacion al detectar cambios
    4. npm install mysql2 // para gestionar la persistencia (base de)

## Gestor de base de datos
### MYSQL - instalar libreria MYSQL
    Instalar MYSQL en el sistema
    **proceso en \APP desde consola:**
    1. npm install mysql2
    2. **probar la conexion desde consola:**
        APP\src\config>
        node db.js









    **Paleta de colores**
        --color-primario: oklch(70.5% 0.213 47.604);        Orange 500      (botones, precios en menu, total, texto-boton-inactivo ring-focus borde-active-sidebar)
        --color-secundario: oklch(93.6% 0.032 17.717);      Red 100         ( )
        --color-bordes-suaves: oklch(88.5% 0.062 18.334)    Red 200         (bordes input ring offline suaves, hover-sidebar)
        --color-texto: oklch(27.9% 0.041 260.031);          Slate 800       (titulos, sibtutulos, precios en carrito)
        --color-secundario-texto oklch(44.6% 0.043 257.281) Slate 600       (descipcion productos, subtitulos en carrito)
        --color-desactive oklch(55.4% 0.046 257.417)       Slate 500       (descipcion productos, subtitulos en carrito)
        --color-desactive oklch(55.4% 0.046 257.417)       Slate 400       (descipcion productos, subtitulos en carrito)
        --color-desactive oklch(92.9% 0.013 255.508)       Slate 200       (bordes suavizados)

