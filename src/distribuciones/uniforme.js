document.getElementById("distUniform").addEventListener("submit", (e)=>{
    e.preventDefault()
    if(sessionStorage.getItem("randomNumbers") != "null"){
        let tableJS = JSON.parse(sessionStorage.getItem("randomNumbers"))
        let R = getR(tableJS)
        let formDistUniform = new FormData(document.getElementById("distUniform"))
        let lim_x = parseInt(formDistUniform.get("lim-x"))
        let lim_y = parseInt(formDistUniform.get("lim-y"))

        let variablesUniformes = []
        for(let i in R){
            variablesUniformes.push(
                (lim_x + (lim_y - lim_x) * R[i])
            )
        }

        toTableUniform(variablesUniformes)

    }
})

function toTableUniform(variablesUniformes){
    let tabla = document.getElementById("tabla-uniforme")

    tabla.innerHTML = ""

    let th = document.createElement("th")
    th.innerHTML = "Variable Uniforme"

    let trH = document.createElement("tr")
    trH.append(th)

    tabla.append(trH)

    for(i in variablesUniformes){
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = variablesUniformes[i]
        tr.append(td)
        tabla.append(tr)
    }

}