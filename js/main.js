
const NOTA_MINIMA = 3.5
const APROBADO = "Aprobado"
const REPROBADO = "Reprobado"

function iniciarPrograma () {
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante")
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))

    let sumaTotal = solicitarNotas(cantidadNotas)
    let promedio = calcularPromedio(sumaTotal, cantidadNotas)
    let estado = obtenerEstado(promedio, NOTA_MINIMA)

    generarReporte(nombreEstudiante, promedio, estado)

}

//Obtener todas las notas del estudiante
function solicitarNotas (cantidadNotas){
    let sumaNotas = 0.0
    let nota = 0.0
    for (let i = 0; i < cantidadNotas; i++){
        nota = parseFloat(prompt("Ingrese la nota: " + (i+1)))
        sumaNotas = sumaNotas + nota;
    }

    return sumaNotas;
}

//Calcular el promedio del estudiante
function calcularPromedio (sumaNotas, cantidadNotas){
    return sumaNotas/cantidadNotas
}

//Calcular el estado del estudiante
const obtenerEstado = (promedio, notaMinima) => (promedio >= notaMinima) ? APROBADO : REPROBADO

//Reporte
function generarReporte(nombreEstudiante, promedioNotas, estado){
    alert("El estudiante: " + nombreEstudiante + ", tiene un promedio de: " + promedioNotas + " y su estado final es: " + estado)
}

iniciarPrograma()