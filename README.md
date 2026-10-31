# Coder House v2 — Pre Entrega 3

Aplicación web sencilla hecha con HTML y JavaScript. Solicita el nombre de un estudiante, la cantidad de notas y cada nota; luego calcula el promedio, determina si aprobó (promedio mínimo: 3.5) y muestra el resultado.

## Requisitos

- Un navegador web actualizado con JavaScript habilitado.
- No se requiere instalar dependencias ni usar npm: el proyecto no tiene un proceso de compilación.

## Inicializar la aplicación

1. Descarga o clona el repositorio en tu equipo.
2. Abre la carpeta del proyecto.
3. Abre `index.html` en un navegador (por ejemplo, con doble clic o usando **Abrir con**).
4. Responde las ventanas emergentes: nombre, cantidad de notas y cada nota.
5. La aplicación mostrará el promedio y el estado final en una ventana emergente.

También puedes iniciar un servidor local desde la carpeta del proyecto, si prefieres acceder por `localhost`:

```bash
python -m http.server 8000
```

Después visita <http://localhost:8000> en el navegador. Si el comando `python` no está disponible en tu sistema, prueba `python3 -m http.server 8000`.

## Estructura

```text
coder_house_v2/
├── index.html     # Página principal; incluye el script de JavaScript
├── js/
│   └── main.js    # Solicita los datos, calcula el promedio y presenta el resultado
└── README.md
```

El archivo JavaScript se incluye desde `index.html` con `defer`, por lo que se ejecuta cuando el documento HTML ya está disponible.
