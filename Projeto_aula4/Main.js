var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTkxMTE3NzEzMl5BMl5BanBnXkFtZTcwMzc4MTU2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for(var i = 0;i < listaFilmes.length;i++) {
  document.write("<img id=\"style\" onmouseover=\"cursor(this)\" onclick=\"escolha(" + i + ")\" src=" + listaFilmes[i]+">")
}

function cursor(x) {
  x.style.cursor = "pointer"
}

function escolha(num) {
  if(num == 0) { 
    window.open("https://www.imdb.com/title/tt0114709/?ref_=nv_sr_srsg_0")
    prompt("test");
  } else if (num == 1) {
    window.open("https://www.imdb.com/title/tt0076759/?ref_=fn_al_tt_1")
  } else if (num == 2) {
    window.open("https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0")
  } else if (num == 3) {
    window.open("https://www.imdb.com/title/tt1502407/?ref_=nv_sr_srsg_7")
  } else if (num == 4) {
    window.open("https://www.imdb.com/title/tt0080761/?ref_=nv_sr_srsg_7")
  } else if (num == 5) {
    window.open("https://www.imdb.com/title/tt1242432/?ref_=nv_sr_srsg_0")
  }
}