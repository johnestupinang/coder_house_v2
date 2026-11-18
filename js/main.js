//1. constantes y variables
const notaMinima = 3.5
const aprobado = "Aprobado"
const reprobado = "Reprobado"

let notas = []

function agregarUltimaNota(){
    let nota = parseFloat(prompt("Ingrese la ultima nota"))
    notas.push(nota);
    alert("Nota agregada al final.")
}

function agregarPrimeraNota(){
    let nota = parseFloat(prompt("Ingrese la primera nota"))
    notas.unshift(nota)
    alert("Nota agregada al inicio")
}

function eliminarUltimaNota(){
    let notaEliminada = notas.pop()
    alert("Se ha eliminado la ultima nota: " + notaEliminada)
}

function existeNota(nota){
    return notas.includes(nota)
}

function obtenerNotaPorInidice(nota){
    return notas.indexOf(nota)
}

function buscarNota(){
    let notaABuscar = parseFloat(prompt("Por favor ingrese la nota que desea buscar"))

    if(existeNota(notaABuscar)){
        let indice = obtenerNotaPorInidice(notaABuscar)
        alert("La nota si existe, se encuentra en la posicion: " + (indice + 1))
    }else{
        alert("La nota ingresada no existe")
    }
}

function reemplazarNota(){
    let posicionNota = parseFloat(prompt("Ingrese la posicion de la nota que dese reemplazar de 1 a " + notas.length))
    let notaNueva = parseFloat(prompt("Ingrese la nueva nota"))
    notas.splice((posicionNota - 1), 1, notaNueva)
}

function listarNotas(nombreEstudiante){
    let mensaje = "Las notas del estudiante: " + nombreEstudiante + " son: \n"
    for (const nota of notas){
        mensaje = mensaje + "Nota: " + nota + "\n"
    }
    alert(mensaje)
}

const calcularPromedio = (cantidadNotas) => {
    let promedio = 0.0
    for(const nota of notas){
        promedio = promedio + nota
    }
    return promedio/cantidadNotas
}

function obtenerEstado(promedio, notaMinima){
    if (promedio >= notaMinima){
        return aprobado
    } 
    return reprobado
}

function mostrarReporte(nombreEstudiante){
    let promedio = calcularPromedio(notas.length)
    let estadoEstudiante = obtenerEstado(promedio, notaMinima)

    alert(
        "El estudiante: " + nombreEstudiante + "\n" +
        "Tiene un promedio de: " + promedio + "\n" +
        "Estado final es: " + estadoEstudiante
    )
}

function solicitarCantidadNotas(cantidadNotas){
    if (cantidadNotas < 5) {
        alert("Recuerde que debe ingresar al menos 5 notas")
    }else{
        for (let i = 0; i < cantidadNotas; i++){
            notas.push(parseFloat(prompt("Ingrese la nota: " + (i+1))))
        }
    }

}


function iniciarPrograma () {
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante")
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))
    solicitarCantidadNotas(cantidadNotas)
    
    let opcion = ""

    while (opcion !== "0"){
        opcion = prompt(
            "Elija una de las siguientes opciones: \n" +
            "1. Agregar nota al final\n" +
            "2. Agregar nota al incicio\n" +
            "3. Eliminar ultima nota\n" +
            "4. Buscar nota\n" +
            "5. Reemplazar una nota\n" +
            "6. Listar las notas\n" + 
            "7. Ver promedio\n" +
            "0. Salir"
        )

        switch (opcion){
            case "1":
                agregarUltimaNota()
                break
            case "2":
                agregarPrimeraNota()
                break
            case "3":
                eliminarUltimaNota()
                break
            case "4":
                buscarNota()
                break
            case "5":
                reemplazarNota()
                break
            case "6":
                listarNotas(nombreEstudiante)
                break
            case "7" :
                mostrarReporte(nombreEstudiante)
                break
            case "0" :
                alert("Saliendo del programa")
                break
            default:
                alert("Ingrese una opcion valida")
                
        }
    }

}

iniciarPrograma()