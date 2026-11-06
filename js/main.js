
//Definición de arreglos
const alumnos = []

//Definiciones de clases
class Alumno {
    static id = 0
    constructor(nombre, apellido, curso, docente, notas) {
        this.id = ++Alumno.id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.curso = curso,
        this.docente = docente,
        this.notas = notas,
        this.promedio = 0.0
        
    }

    promedioNotas = () => {
        let suma = 0.0
        for (const nota of this.notas) {
            suma = suma + nota
        }
        this.promedio = suma
        return this.promedio / this.notas.length
    }
}

//Instancia de clase Alumno
const alumno = new Alumno("Pedro", "Sanchez", "Matematicas", "Fernando Rojas", [3.5, 4.0, 2.5, 5.0])
const alumno2 = new Alumno("Rosa", "Fernandez", "Español", "Juan Perez", [5.0, 4.0, 4.0, 5.0])
const alumno3 = new Alumno("Miguel", "Gomez", "Ingles", "Fernando Rojas", [2.0, 1.0, 3.0, 5.0])

alumnos.push(alumno)
alumnos.push(alumno2)
alumnos.push(alumno3)

function cargarNotas () {
    let notas = []
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i+1) + " del alumno"))
        notas.push(nota)
    }
    return notas
}

function cargarEstudiantes() {
    let nombre = prompt("Ingrese el nombre del alumno")
    let apellido = prompt("Ingrese el apellido del alumno")
    let curso = prompt("Ingrese el curso del alumno")
    let docente = prompt("Ingrese el nombre del docente del curso")
    let notas = cargarNotas()
    
    const alumno = new Alumno(nombre, apellido, curso, docente, notas)

    alumnos.push(alumno)
}

const listarEstudiantes = () => {
    if (alumnos.length == 0){
        alert("No hay alumnos registrados")
    } else {
        let mensaje = "Listado de alumnos: \n"
        for (const alumno of alumnos) {
            mensaje = mensaje + alumno.nombre + " " + alumno.apellido + "\n"
        }
        alert(mensaje)
    }
    
}

//Visualización de datos

let menu = parseInt(prompt("Ingrese una opción: \n1. Cargar estudiantes \n2. Listar estudiantes \n3. Salir"))

while (menu != 3) {
    switch (menu) {
        case 1:
            cargarEstudiantes()
            break;
        case 2:
            listarEstudiantes()
            break;
        default:
            alert("Elija otra opción.")
            break;
    }

    menu = parseInt(prompt("Ingrese una opción: \n1. Cargar estudiantes \n2. Listar estudiantes \n3. Salir"))

}

console.log(alumnos)

alumnos.forEach((alumno) => {
    console.log("Alumno: " + alumno.nombre + " " + alumno.apellido + " tiene un promedio de: " + alumno.promedioNotas(alumno.notas))
})