//Constantes y variables
const notaMinima = 3.5
const aprobado = "Aprobado"
const reprobado = "Reprobado"
const cantidadNotas = 0

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

        if (this.notas.length === 0){
            this.promedio = 0.0
            return this.promedio
        }

        let suma = 0.0
        for (const nota of this.notas) {
            suma = suma + nota
        }

        this.promedio = suma / this.notas.length
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
        let nota = parseFloat(prompt("Ingrese la nota " + (i+1) + " del alumno"))
        notas.push(nota)
    }
    return notas

}

function cargarAlumnos() {

    let nombre = prompt("Ingrese el NOMBRE del alumno")
    let apellido = prompt("Ingrese el APELLIDO del alumno")
    let curso = prompt("Ingrese el CURSO del alumno")
    let docente = prompt("Ingrese el nombre del DOCENTE del curso")
    let notas = cargarNotas()
    
    const alumno = new Alumno(nombre, apellido, curso, docente, notas)
    alumnos.push(alumno)

    alert("Se a cargado al alumno: " + alumno.nombre + " " +alumno.apellido + ". Al simulador")
}

const listarAlumnos = () => {
    if (alumnos.length == 0){
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

function iniciarPrograma() {

    let menu = 0

    while (menu != 3) {

        menu = parseInt(
            prompt(
                "SIMULADOR: CÁLCULO DE PROMEDIO DE NOTAS\n"+
                "1. Registrar alumnos\n" +
                "2. Listar alumnos\n" +
                "3. Salir"
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
                alert("Saliendo del simulador")
                break
            default:
                alert("Opción incorrecta, elija nuevamente.")
                break
        }


    }
}

//Instancia de clase Alumno
/*const alumno = new Alumno("Pedro", "Sanchez", "Matematicas", "Fernando Rojas", [3.5, 4.0, 2.5, 5.0])
const alumno2 = new Alumno("Rosa", "Fernandez", "Español", "Juan Perez", [5.0, 4.0, 4.0, 5.0])
const alumno3 = new Alumno("Miguel", "Gomez", "Ingles", "Fernando Rojas", [2.0, 1.0, 3.0, 5.0])

alumnos.push(alumno)
alumnos.push(alumno2)
alumnos.push(alumno3)*/

iniciarPrograma()

console.log(alumnos)

alumnos.forEach((alumno) => {
    console.log("Alumno: " + alumno.nombre + " " + alumno.apellido + " tiene un promedio de: " + alumno.calcularPromedio())
})
