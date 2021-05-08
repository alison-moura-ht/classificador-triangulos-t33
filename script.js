
function classificar() {
    
    // coletar dados
    
    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value 
    let lado3 = document.getElementById("lado3").value

    // comparações
    // 1 - se é equilátero (todos os lados iguais)
    // 2 - senão se é escaleno (todos os lados diferentes)
    // 3 - senão é isóceles

    if(lado1 == lado2 && lado2 == lado3) { 
        alert("É equilátero")
    } else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1) { 
        alert("É escaleno")
    } else {
        alert("É isóceles")
    }


    // 1 - se é isóceles
    // 2 - senão, se é equilátero
    // 3 - senão, é escaleno

    // if(
    //     (lado1 == lado2 && lado2 != lado3) 
    //     || (lado2 == lado3 && lado3 != lado1)
    //     || (lado3 == lado1 && lado1 != lado2)
    // ){
    //     alert("É isóceles")
    // } else if(lado1 == lado2 && lado2 == lado3) {
    //     alert("É equilátero")
    // } else {
    //     alert("É escaleno")
    // }

}