document.getElementById("distPoisson").addEventListener("submit", (e) => {
    e.preventDefault()
    if (sessionStorage.getItem("randomNumbers") != "null") {
        let tableJS = JSON.parse(sessionStorage.getItem("randomNumbers"))
        let R = getR(tableJS)
        let formDistPoisson = new FormData(document.getElementById("distPoisson"))
        let media = parseInt(formDistPoisson.get("media"))

        let variablesPoisson = []
        for (let i = 0; i < 10; i++) {
            variablesPoisson.push(
                (((Math.E ** (-media)) * (media ** i)) / factorial(i))
            )
        }

        toTablePoisson(variablesPoisson)
    }
})

function toTablePoisson(variablesPoisson) {
    let tabla = document.getElementById("tabla-poisson")

    tabla.innerHTML = ""

    let thn = document.createElement("th")
    thn.innerHTML = "#"
    let th = document.createElement("th")
    th.innerHTML = "Variable Poisson (Sin Acumular)"
    let tha = document.createElement("th")
    tha.innerHTML = "Variable Poisson (Acumulado)"
    

    let trH = document.createElement("tr")
    //Se añade primero el indice
    trH.append(thn)
    //Se añade Variable Poisson Sin Acumular
    trH.append(th)
    //Se añade Variable Poisson Acumulado
    trH.append(tha)

    tabla.append(trH)

    for (i in variablesPoisson) {
        let tdn = document.createElement("td")
        let td = document.createElement("td")
        let tda = document.createElement("td")

        let tr = document.createElement("tr")
        tdn.innerHTML = i
        td.innerHTML = variablesPoisson[i]
        tda.innerHTML = i == 0 ? variablesPoisson[i] : variablesPoisson[i] + variablesPoisson[i-1]
        tr.append(tdn, td, tda)
        tabla.append(tr)
    }
}

function factorial(r) {
    if (r == 0 || r == 1) {
        return 1
    }
    else {
        for (let i = r - 1; i > 0; i--) {
            r *= i
        }

        console.log(r)
        return r
    }
}