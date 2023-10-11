document.getElementById("distExp").addEventListener("submit", (e)=>{
    e.preventDefault()
    const decimales = 5
    if(sessionStorage.getItem("randomNumbers") != "null"){
        let tableJS = JSON.parse(sessionStorage.getItem("randomNumbers"))
        let R = getR(tableJS)
        let formDistExp = new FormData(document.getElementById("distExp"))
        let mediaOLambda = formDistExp.get("mediaOLambda")
        let value = parseFloat(formDistExp.get("valor"))

        let RMediaOLambda = []
        if(mediaOLambda == "Lambda"){
            for(i in R){
                if(R[i] != 0){
                    RMediaOLambda.push(((-1/value)*Math.log(R[i])).toFixed(decimales))
                }
                else{
                    RMediaOLambda.push((1/value).toFixed(decimales))
                }
            }

            toTableExponencial(RMediaOLambda)
            // FALTA LA ECUACIÓN PARA HACER LOS CALCULOS CON LAMBDA
        }
        else{
            if(mediaOLambda == "Media"){

                for(i in R){
                    if(R[i] != 0){
                        RMediaOLambda.push(((-value)*Math.log(R[i])).toFixed(decimales))
                    }
                    else{
                        RMediaOLambda.push(value)
                    }
                }

                toTableExponencial(RMediaOLambda)
                // FALTA LA ECUACIÓN PARA HACER LOS CALCULOS CON LA MEDIA
            }
        }
    }
})

function getR(arreglo){
    let R = []
    for(i in arreglo){
        R.push(parseFloat(arreglo[i].norm))
    }
    return R
}

function toTableExponencial(RMediaOLambda){
    let tabla = document.getElementById("tabla-exponencial")

    tabla.innerHTML = ""

    let th = document.createElement("th")
    th.innerHTML = "Variable Exponencial"

    let trH = document.createElement("tr")
    trH.append(th)

    tabla.append(trH)

    for(i in RMediaOLambda){
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = RMediaOLambda[i]
        tr.append(td)
        tabla.append(tr)
    }
}