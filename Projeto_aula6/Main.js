var paulo = {
    nome: "Jogador2",
    vitorias: 2,
    empates: 5,
    derrotas: 3,
    pontos: 0
  }
  
  var rafa = {
    nome: "Jogador1",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  
  var jogadores = [rafa, paulo]
  calculaPontos(jogadores)
  exibirJogadoresNaTela(jogadores)
  
  function calculaPontos(jogador) {
    for(var i = 0;i < jogadores.length;i++){
      jogadores[i].pontos = (jogadores[i].vitorias * 3) + jogadores[i].empates
    }
    
    return jogador.pontos
  }
  
  function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for(let i = 0;i < jogadores.length;i++) {
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick=\"adicionarVitoria(" + i + ")\">Vitória</button></td>"
      html += "<td><button onClick=\"adicionarEmpate(" + i + ")\">Empate</button></td>"
      html += "<td><button onClick=\"adicionarDerrota(" + i + ")\">Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
   
    jogador.nome == "Jogador1" ? adicionarDerrota(i+1) : adicionarDerrota(i-1)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.nome == "Jogador1" ? jogadores[i+1].empates++ : jogadores[i-1].empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    if((jogadores[0].derrotas != jogadores[1].vitorias) || (jogadores[1].derrotas != jogadores[0].vitorias)) {
      if(jogador.nome == "Jogador1") {
        jogadores[i+1].vitorias++
        jogadores[i+1].pontos = calculaPontos(jogadores[i+1])
      }else {
        jogadores[i-1].vitorias++
        jogadores[i-1].pontos = calculaPontos(jogadores[i-1])
      }
    }
    exibirJogadoresNaTela(jogadores)
  }