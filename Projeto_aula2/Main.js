var btn = document.querySelectorAll(".coluna li"),
    showInput = document.querySelector(".showInput");

var fimDaOper;    

for(var i = 0;i < btn.length;i++) {
    document.onkeypress = function() {
        if(fimDaOper) {
            showInput.innerHTML = "";
            fimDaOper = 0;
        }
        var key = event.keyCode;
        for(var e = 0;e <= 9;e++) {
            if(key === (48+e)) {
                showInput.innerHTML += e;
            }
        }
        switch(key) {
            case 42:
                showInput.innerHTML += "*";
                break;
            case 43:
                showInput.innerHTML += "+";
                break;
            case 45:
                showInput.innerHTML += "-";
                break;
            case 46:
                showInput.innerHTML += ".";
                break;
            case 47:
                showInput.innerHTML += "/";
                break;
            case 13:
            case 61:
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
            case 99:
                showInput.innerHTML = "";
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
            case "c":
                showInput.innerHTML = "";
                break;
            case "=":
                fimDaOper = 1;
                var equacao = inputVal;
                if(equacao){
                    try {
                        showInput.innerHTML = eval(equacao);
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

