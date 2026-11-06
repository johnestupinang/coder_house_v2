
const notaMinima = 3.5
const aprobado = "Aprobado"
const reprobado = "Reprobado"

let notas = []

function iniciarPrograma () {
    let nombreEstudiante = prompt("Ingrese el nombre del estudiante")
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))

    for (let i = 0; i < cantidadNotas; i++){
        notas.push(parseFloat(prompt("Ingrese la nota: " + (i+1))))
    }

    agregarPrimeraNota(parseFloat(prompt("Corrija la primera nota del estudiante")))
    agregarUltimaNota(parseFloat(prompt("Corrija la ultima nota del estudiante")))

    let existe =  ""

    if(existeNota(parseFloat(prompt("Busque una nota en especifico: ")))) {
        existe = "El estudiante si tiene esa nota"
    }else{
        existe = "El estudiante no la tiene"
    }
    alert(existe)

    let indiceNota = obtenerNotaPorInidice(parseFloat(prompt("Reemplace una nota del estudiante, si no existe, reemplaza la primera nota")))
    reemplazarNota(indiceNota)  

    let promedio = calcularPromedio(cantidadNotas)
    let estado = obtenerEstado(promedio, notaMinima)
    
    //Generar Reporte
    alert(
        
        "**************************************************************\n" +
        " El estudiante: " + nombreEstudiante + "\n" +
        "Tiene un promedio de: " + promedio + "\n" +
        "Estado final es: " + estado + "\n" +
        "**************************************************************"

    )

}

//Agregar nota al inicio
function agregarPrimeraNota(nota){
    notas.shift()
    notas.unshift(nota)
}

//Agregar nota al final
function agregarUltimaNota(nota){
    notas.pop()
    notas.push(nota);
}

//Buscar nota en especifico
function existeNota(nota){
    return notas.includes(nota)
}

//Buscar nota por indice
function obtenerNotaPorInidice(nota){
    return notas.indexOf(nota)
}

//Reemplazar una nota del estudiante
function reemplazarNota(indice){
    let nota = parseFloat(prompt("Ingrese la nota"))
    if (indice === -1){
        agregarPrimeraNota(nota)
    } else {
        notas.splice(indice, 1, nota)
    }
}


//Calcular el promedio del estudiante
const calcularPromedio = (cantidadNotas) => {
    let promedio = 0.0
    for(const nota of notas){
        promedio = promedio + nota
    }
    return promedio/cantidadNotas
}

//Calcular el estado del estudiante
function obtenerEstado(promedio, notaMinima){
    if (promedio >= notaMinima){
        return aprobado
    } 
    return reprobado
}

iniciarPrograma()