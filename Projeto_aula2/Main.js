var btn = document.querySelectorAll(".coluna li"),
    showInput = document.querySelector(".showInput");

var fimDaOper;    

for(var i = 0;i < btn.length;i++) {
    document.onkeydown = function() {
        if(fimDaOper) {
            showInput.innerHTML = "";
            fimDaOper = 0;
        }
        var key = event.keyCode;
        for(var e = 1;e <= 9;e++) {
            if(key === (48+e) || (key === (96+e))) {
                showInput.innerHTML += e;
            }
        }
        switch(key) {
            case 106:
                showInput.innerHTML += "*";
                break;
            case 107:
                showInput.innerHTML += "+";
                break;
            case 109:
            case 189:    
                showInput.innerHTML += "-";
                break;
            case 190:
            case 194:
                showInput.innerHTML += ".";
                break;
            case 193:
            case 111:
                showInput.innerHTML += "/";
                break;
            case 13:
                fimDaOper = 1;
                var equacao = showInput.innerHTML;
                if(equacao) {
                    try {
                        showInput.innerHTML = eval(equacao);
                    }
                    catch (e){
                        alert("Erro na expressão");
                    }
                }   
                break;
            case 67:
                showInput.innerHTML = "";
                break;
            case 8:
                let regErase = /\d$/;
                let contentStr = showInput.textContent;
                showInput.innerHTML = contentStr.replace(regErase, "")
                break;
            default:
                break;                             
        }
    };  
    btn[i].addEventListener("click", function() {
        if(fimDaOper) {
            showInput.innerHTML = "";
            fimDaOper = 0;
        }
        var btnVal = this.innerHTML,
            inputVal = showInput.innerHTML;

        switch(btnVal) {
            case "C":
                showInput.innerHTML = "";
                break;
            case "=":
                fimDaOper = 1;
                var equacao = inputVal;
                if(equacao){
                    try {
                        showInput.innerHTML = eval(equacao);// Valor quando começa com 0 dá outro
                    } catch (e){
                        alert("Erro na expressão");
                    }
                }
                break;
            default:
                showInput.innerHTML += btnVal;  
                break;  
        }   

    });

}

