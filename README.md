![AlbumXplorer by Gianluca Di Bella](hero.png)

# AlbumXplorer - Explora y Descubre Álbumes de Fotos 📸🔍

¡Hola, soy Gianluca Di Bella, y te presento AlbumXplorer! Una emocionante aplicación para explorar y descubrir álbumes de fotos de tus momentos favoritos. 🌄🌞

## Cómo ejecutar el proyecto

Para poner en funcionamiento esta maravillosa aplicación, necesitarás tener instalado [Node.js](https://nodejs.org) en tu computadora.

1. Descarga o clona el repositorio en tu computadora.
2. Abre una terminal en la carpeta del proyecto y ejecuta el comando `npm install` para instalar las dependencias mágicas.
3. Una vez que se hayan instalado las dependencias, ejecuta el comando `npm start` para iniciar el poderoso servidor local.
4. ¡Abracadabra! Abre tu navegador web y visita `http://localhost:3000` para sumergirte en la experiencia fotográfica de AlbumXplorer.

En AlbumXplorer, hemos utilizado Next.js 13, una versión brillante de Next.js que nos permitió aprovechar el SSR (Server-Side Rendering) para pre-cargar la página, disminuir los tiempos de espera y brindar un boost en SEO y en el rendimiento general de la página. ✨💨

## Tecnologías Utilizadas 💻

- Next.js 13 🌟
- React con Hooks ⚛️ (¡La magia de los Hooks para un manejo mágico de estado! 🪄)
- Tailwind CSS 🎨 (¡Sin preocupaciones por los estilos, solo magia! ✨)
- Prop Drilling Básico para un manejo simple de datos entre componentes 🌈
- Arquitectura basada en Componentes de Next.js para una estructura clara y escalable 🌠

## Pruebas en Cypress

En AlbumXplorer, se necesita que todo funcione de manera impecable. Realicé pruebas en Cypress para garantizar la correcta interacción de los elementos y la experiencia del usuario.

Para correr las pruebas, asegúrate de que la página esté en `http://localhost:3000` y luego ejecuta el comando `npm run cypress:open` en tu terminal.

## Posibles Mejoras

Siempre existen maneras de hacer que la experiencia en AlbumXplorer sea aún mejor. Algunas mejoras que estoy considerando incluyen:

- 🚀 Agregar animaciones para una experiencia más interactiva.
- 🌐 Soporte para internacionalización para llegar a más amantes de la fotografía en todo el mundo.
- 🎯 Mejorar la experiencia móvil para aquellos que exploran desde sus dispositivos.

## ¿Por qué no utilicé localStorage? 🤔

- **Actualización en tiempo real** ⏳: Al obtener datos del servidor, siempre mostramos la información más actualizada de tus álbumes de fotos.
- **Evita problemas de sincronización** 🔄: No hay conflictos de sincronización entre dispositivos, ya que todos los usuarios obtienen los mismos datos del servidor.
- **Espacio de almacenamiento ilimitado** 💾: Al obtener los datos directamente desde el servidor, evitamos ocupar el límite de aproximadamente 5-10 MB en el localStorage.
- **Mejor escalabilidad** 📈: Obtener datos del servidor permite una mayor escalabilidad, ya que el servidor puede manejar la carga de múltiples usuarios eficientemente.


## Licencia

AlbumXplorer se rige por la licencia MIT. Consulta el archivo LICENSE para conocer todos los detalles.

¡Prepárate para vivir una experiencia fotográfica extraordinaria en AlbumXplorer! 🌄🌈🌞