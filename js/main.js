//Constantes y variables
const notaMinima = 3.5
const aprobado = "Aprobado"
const reprobado = "Reprobado"

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

    calcularPromedio = () => {

        if (this.notas.length === 0) {
            this.promedio = 0.0
            return this.promedio
        }

        this.promedio = this.notas.reduce((suma, notaActual) => suma + notaActual, 0) / this.notas.length

        return this.promedio
    }

    obtenerEstado = () => {
        return this.calcularPromedio() >= notaMinima ? aprobado : reprobado
    }
}

function cargarNotas () {

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas: "))

    let notas = []
    for (let i = 0; i < cantidadNotas; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " del alumno"))
        notas.push(nota)
    }
    return notas

}

function filtrarAlumnoPorId () {
    let idAlumno = parseInt(prompt("Ingrese el Id del alumno a buscar:"))
    let alumno = alumnos.find((alumno) => alumno.id === idAlumno)

    if(alumno){
        alert("Alumno: " + alumno.nombre + " " + alumno.apellido +
            ".\n Esta inscrito en el curso: " + alumno.curso + 
            ".\n y tiene el estado: " + alumno.obtenerEstado() + 
            ".\n Con el promedio: " + alumno.calcularPromedio())
    } else {
        alert("Alumno con el id: " + idAlumno + ". NO se ha encontrado.")
    }

}

function filtrarAlumnosPorEstado () {

    let estado = ""
    let opcion = parseInt(
        prompt("Ingrese el estado por el cual quiere buscar:\n" +
            "1. Aprobados\n"+
            "2. Reprobados"
        )
    )

    switch(opcion) {
        case 1 :
            estado = aprobado
            break
        case 2 :
            estado = reprobado
            break
        default :
            alert("Ingrese una opción valida entre 1 y 2")
            return
            break
    }

    let alumnosEncontrados = alumnos.filter((alumno) => alumno.obtenerEstado() === estado)

    if (alumnosEncontrados.length === 0) {
        alert("No se encotraron alumnos con el estado: " + estado)
        return
    } else {
        let mensaje = alumnosEncontrados.map( (alumno) =>  
            "- Id: " + alumno.id + " " +
            "- Nombre completo: " + alumno.nombre + " " + alumno.apellido + " "+
            "- Curso: " + alumno.curso + " " +
            "- Docente: " + alumno.docente +" " +
            "- Promedio: " + alumno.calcularPromedio() +" " +
            "- Estado del alumno: " + alumno.obtenerEstado()
        )

        alert (mensaje)
    }

}

function filtrarAlumnosPorCurso () {

    let curso = prompt("Ingrese el curso a buscar: ")
    let alumnosEncontrados = alumnos.filter((alumno) => alumno.curso === curso)

    if (alumnosEncontrados.length === 0) {
        alert("No se encotraron alumnos con el curso: " + curso)
        return
    } else {
        let mensaje = alumnosEncontrados.map( (alumno) =>  
            "- Id: " + alumno.id + "\n" +
            "- Nombre completo: " + alumno.nombre + " " + alumno.apellido + "\n"+
            "- Curso: " + alumno.curso + "\n" +
            "- Docente: " + alumno.docente +"\n" +
            "- Promedio: " + alumno.calcularPromedio() +"\n" +
            "- Estado del alumno: " + alumno.obtenerEstado() + "\n"
        )

        alert (mensaje)
    }

}

function cargarAlumnos () {

    let nombre = prompt("Ingrese el NOMBRE del alumno")
    let apellido = prompt("Ingrese el APELLIDO del alumno")
    let curso = prompt("Ingrese el CURSO del alumno")
    let docente = prompt("Ingrese el nombre del DOCENTE del curso")
    let notas = cargarNotas()

    const alumno = new Alumno(nombre, apellido, curso, docente, notas)
    alumnos.push(alumno)

    alert("Se a cargado al alumno: " + alumno.nombre + " " + alumno.apellido + ". Al simulador")
}

const listarAlumnos = () => {
    if (alumnos.length == 0) {
        alert("Todavia no hay alumnos registrados.")
    } else {
        let mensaje = "Listado de alumnos: \n"

        for (const alumno of alumnos) {
            mensaje = mensaje + "\n" +
                "- Alumno: " + alumno.nombre + " " + alumno.apellido + " " +
                "- Notas: " + alumno.notas + " " +
                "- Curso: " + alumno.curso + " " +
                "- Docente: " + alumno.docente + " " +
                "- Promedio: " + alumno.calcularPromedio() + " " +
                "- Estado: " + alumno.obtenerEstado()
        }

        alert(mensaje)
    }

}

function iniciarPrograma () {

    let menu = 0

    while (menu != 6) {

        menu = parseInt(
            prompt(
                "SIMULADOR: CÁLCULO DE PROMEDIO DE NOTAS\n" +
                "1. Registrar alumnos\n" +
                "2. Listar alumnos\n" +
                "3. Buscar alumno por id\n" +
                "4. Buscar alumo por curso\n" +
                "5. Buscar alumnos aprobados o reprobados\n" +
                "6. Salir"
            )
        )

        switch (menu) {
            case 1:
                cargarAlumnos()
                break
            case 2:
                listarAlumnos()
                break
            case 3:
                filtrarAlumnoPorId()
                break
            case 4:
                filtrarAlumnosPorCurso()
                break
            case 5:
                filtrarAlumnosPorEstado()
                break
            case 6:
                alert("Saliendo del simulador")
                break
            default:
                alert("Opción incorrecta, elija nuevamente.")
                break
        }


    }
}

//Instancia de clase Alumno
const alumno = new Alumno("Pedro", "Sanchez", "Matematicas", "Fernando Rojas", [3.5, 4.0, 2.5, 5.0])
const alumno2 = new Alumno("Rosa", "Fernandez", "Español", "Juan Perez", [5.0, 4.0, 4.0, 5.0])
const alumno3 = new Alumno("Miguel", "Gomez", "Ingles", "Fernando Rojas", [2.0, 1.0, 3.0, 5.0])

alumnos.push(alumno)
alumnos.push(alumno2)
alumnos.push(alumno3)

console.log(alumnos)

alumnos.forEach((alumno) => {
    console.log("Alumno: " + alumno.nombre + " " + alumno.apellido + " tiene un promedio de: " + alumno.calcularPromedio())
})

iniciarPrograma()


