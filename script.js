//Carne = 400g por pessoa / se a duração for maior que 6 horas = 650g por pessoa
//Cerveja = 1200ml por pessoa / se a duração for maior que 6 horas = 2000ml por pessoa
//Refrigerante/Agua = 1000 ml por pessoa / se a duração for maior que 6 horas = 1500ml por pessoa
//Crianças valem metade de uma pessoa 0.5


function continuar(){
    let welcome = document.getElementById('bv')
    let churr = document.getElementById('bf')
    welcome.style.display = 'none'
    churr.style.display = 'flex'
    
       

}


let res = document.getElementById ('resultado')
let adultos = document.getElementById ('adultos')
let crianças = document.getElementById('crianças')
let duração = document.getElementById('duração')





function calcular() {
   
    if (adultos.value == 0 && duração.value == 0) {
    alert('ERRO, por favor confira os dados!')
    }
    else if (duração.value < 6){
    
    //calc comida
    var carneA = adultos.value * 400
    var carneC = crianças.value * 200
    var resulcarne = (carneA + carneC) 
    
    //calc bebidas
    var bebidaA = adultos.value * 1200
    var bebidaC = crianças.value * 600
    var refri   = Math.round(bebidaC / 1000)
    var resulbebida = Math.round(bebidaA / 350)
    res.innerHTML = (`<p>A quantidade de carne será ${resulcarne}g</p>`)
    res.innerHTML += (`<p>${resulbebida} Latas de cerveja</p>`)
    res.innerHTML += (`<p>${refri} Garrafas de 2L de refrigerante</p>`)
    } else {
    //calc carne
    var carneA = adultos.value * 650
    var carneC = crianças.value * 325
    var resulcarne = (carneA + carneC) 

    //calc bebidas
    var bebidaA = adultos.value * 2000
    var bebidaC = crianças.value * 1000
    var refri   = Math.round(bebidaC / 1000)
    var resulbebida = Math.round(bebidaA / 350)
    res.innerHTML = (`<p>A quantidade de carne sera ${resulcarne}g</p>`)
    res.innerHTML += (`<p>${resulbebida} Latas de cerveja</p>`)
    res.innerHTML += (`<p>${refri} Garrafas de 2L de refrigerante</p>`)
    }
    
}

