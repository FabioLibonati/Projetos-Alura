var count = 0
function adicionarFilme() {
    var filmeImagem = document.querySelector('#filme')
    var filmeVideo = document.querySelector('#filme2')

    var filmeImagemValue = filmeImagem.value
    var filmeVideoValue = filmeVideo.value

    validarFilme(filmeImagemValue, filmeVideoValue)

    filmeVideo.value = ""
    filmeImagem.value = ""
}

function validarFilme(filmeImagemValue, filmeVideoValue) {
    if (filmeImagemValue.endsWith('.jpg') && filmeVideoValue != "") {
        // Deixa o usuário ser capaz de entrar com apenas uma url
        let video = filmeVideoValue.replace("watch?v=", "embed/")
        configurarFilmesTela(filmeImagemValue, video)
    } else {
        alert("Imagem ou vídeo inválido")
    }
}

function configurarFilmesTela(filme, filme2) {
    count++
    var elementoFilmeImagem = "<img style=\"top:7px;\" height=\"200px\" src=" + filme + ">"

    // Contador para ter apenas dois filmes/trailler em cada linha
    if(count <= 2){
        var elementoFilmeVideo = "<iframe height=\"200px\" src=" + filme2 + "></iframe>"
    } else {
        var elementoFilmeVideo = "<iframe height=\"200px\" src=" + filme2 + "></iframe><br>"
        count = 0
    }

    aparecerNaTela(elementoFilmeImagem, elementoFilmeVideo)
    count++
}

function aparecerNaTela(imagemFilme, videoFilme) {

    var listaFilmes = document.querySelector('#listaFilmes')
    // Faz imagem e vídeo aparecerem na tela
    listaFilmes.innerHTML += imagemFilme + videoFilme

    document.getElementById("listaFilmes").style.transform = "scale(1)"
}