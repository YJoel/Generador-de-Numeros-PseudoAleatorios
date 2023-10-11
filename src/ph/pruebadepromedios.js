document.getElementById("promedio").addEventListener("click", ()=>{
    let tableJS = JSON.parse(sessionStorage.getItem("randomNumbers"))
    let acum = 0
    
    for(i in tableJS){
        acum += tableJS[i].norm
    }

    let promedio = acum/tableJS.length
    let zeta0 = Math.abs((promedio-0.5)*Math.sqrt(parseInt(tableJS.length)))/Math.sqrt(1/12)
    document.querySelector(".promedio").innerHTML = `Z_0 = ${zeta0.toFixed(4)}`
})