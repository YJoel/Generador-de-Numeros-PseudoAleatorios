let resultado = document.getElementById("resultado")

let tableR = document.createElement("table")
    tableR.id = "randomNumbers"

inicializarTablaHTML()

const row = {n:0, X:0, A:0, C:0, M:0, norm:0}

function R(){
    // Valores de las variables obtenidas del HTML
    let values = new FormData(document.getElementById("form1"))
    let X = parseInt(values.get("input-X"))
    let A = parseInt(values.get("input-A"))
    let C = parseInt(values.get("input-C"))
    let M = parseInt(values.get("input-M"))

    // Paso de las variables al arreglo
    row.n = 0
    row.X = X
    row.A = A
    row.C = C
    row.M = M
    row.norm = row.X/M

    for(let i = 1;  i < M; i++){
        toTable(row)
        row.n = i
        row.A = (row.X*A)+C
        row.X = row.A % M
        row.C = ""
        row.M = ""
        row.norm = row.X/M
    }
    if(periodoCompleto() == true){
        document.getElementById("info").classList.add("success")
        document.getElementById("info").innerHTML = "TIENE PERIODO COMPLETO"
        toHTML()
    }
    else{
        document.getElementById("info").classList.add("warning")
        document.getElementById("info").innerHTML = "NO TIENE PERIODO COMPLETO"
    }
}

function inicializarTablaHTML(){
    let trHeader = document.createElement("tr")

    let nHeader = document.createElement("th")
    nHeader.innerHTML = "#"
    trHeader.append(nHeader)

    let xHeader = document.createElement("th")
    xHeader.innerHTML = "X"
    trHeader.append(xHeader)

    let aHeader = document.createElement("th")
    aHeader.innerHTML = "A"
    trHeader.append(aHeader)

    let cHeader = document.createElement("th")
    cHeader.innerHTML = "C"
    trHeader.append(cHeader)

    let mHeader = document.createElement("th")
    mHeader.innerHTML = "M"
    trHeader.append(mHeader)

    let normHeader = document.createElement("th")
    normHeader.innerHTML = "Normalizado"
    trHeader.append(normHeader)

    tableR.append(trHeader)
}

function toTable(row){
    let fila = document.createElement("tr")

    let n = document.createElement("td")
    n.innerHTML = row.n
    fila.append(n)

    let x = document.createElement("td")
    x.innerHTML = row.X
    fila.append(x)

    let a = document.createElement("td")
    a.innerHTML = row.A
    fila.append(a)

    let c = document.createElement("td")
    c.innerHTML = row.C
    fila.append(c)

    let m = document.createElement("td")
    m.innerHTML = row.M
    fila.append(m)

    let norm = document.createElement("td")
    norm.innerHTML = row.norm
    fila.append(norm)
    
    tableR.append(fila)
}

function toHTML(){
    resultado.append(tableR)
}

function limpiar(){
    resultado.innerHTML = ""
    tableR.innerHTML = ""
}

function periodoCompleto(){
    let firstValue = tableR.children[1].children[1].innerHTML

    for(let i = 2; i < tableR.children.length; i++){
        if(tableR.children[i].children[1].innerHTML == firstValue){
            return false
        }
    }

    return true
}