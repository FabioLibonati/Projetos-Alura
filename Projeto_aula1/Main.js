
// Pega o valor e converte
function converter() {
var valorEmDolar = document.getElementById("value").value

document.getElementById("value").value = 0

var valorEmDolarNumero = parseFloat(valorEmDolar)

var valorEmReal = (valorEmDolarNumero * 5.51).toFixed(2)
if (!(valorEmReal === "NaN")){       
  document.getElementById("showValue").innerHTML = valorEmReal   
} else {
document.getElementById("showValue").innerHTML = "O valor Digitado não é um número"
}
//showValue(valorEmReal)
}

/* Mostra o valor na tela
function showValue(ValorEmReal) {
  if (!(valorEmReal === "NaN")){       
      document.getElementById("showValue").innerHTML = "valorEmReal"    
} else {
  document.getElementById("showValue").innerHTML = "O valor Digitado não é um número"
}
}*/