# Coder House v2 — Pre Entrega 3

Repositorio de ejercicios y prácticas de HTML y JavaScript. El contenido de los archivos puede cambiar entre ejercicios; este README explica cómo ejecutar una página web del proyecto sin depender de la lógica de un ejercicio específico.

## Requisitos

- Un navegador web actualizado con JavaScript habilitado.
- Para abrir el proyecto mediante un servidor local, Python 3.

## Ejecutar un ejercicio

1. Abre la carpeta del proyecto y localiza el archivo HTML de entrada del ejercicio que quieres ejecutar.
2. Para una ejecución sencilla, abre ese archivo HTML con un navegador.
3. Si el ejercicio necesita cargarse desde un servidor local, abre una terminal en la carpeta del proyecto e inicia el servidor:

   ```bash
   python -m http.server 8000
   ```

   Si tu sistema usa el comando `python3`, ejecuta `python3 -m http.server 8000`.

4. En el navegador, visita <http://localhost:8000/>. Si el archivo HTML de entrada está dentro de una subcarpeta o tiene otro nombre, agrega su ruta a la dirección; por ejemplo, `http://localhost:8000/ruta/archivo.html`.

El archivo HTML de entrada carga los archivos JavaScript que necesite el ejercicio. Si cambian las rutas o la estructura de archivos, selecciona la página HTML correspondiente y conserva las referencias a sus recursos.
