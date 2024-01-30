// let data = []
let data = [
  { categoria: 'A', nome: 'Fondue', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Comida chinesa', quanto: '2', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Açaí', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Sorveteria', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Pastel', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Jantar romântico', quanto: '3', tempo: '1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Pizza', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'A', nome: 'Café da manhã na cama', quanto: '1', tempo: '1h-3h', pessoas: ['casal'], onde: ['atHome'], locais: [] },
  { categoria: 'A', nome: 'Fastfood', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: [] },
  { categoria: 'A', nome: 'Comida japonesa', quanto: '2', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'B', nome: 'Vinho', quanto: '1', tempo: '1h-3h', pessoas: ['casal'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'B', nome: 'Karaokê', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'B', nome: 'Bar', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'B', nome: 'Pub', quanto: '2', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'B', nome: 'Baladinha', quanto: '2', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'C', nome: 'Filme com pipoca', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: [] },
  { categoria: 'C', nome: 'Cinema', quanto: '2', tempo: '4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'D', nome: 'Jogar basquete', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'D', nome: 'Academia', quanto: '2', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'E', nome: 'Andar de bicicleta', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Ir ao parque', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Piquenique', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Praia', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Massagem', quanto: '2', tempo: '1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Ver o por do sol', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Shopping', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Observar as estrelas', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Museus', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'E', nome: 'Exposições', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'F', nome: 'Jogar baralho', quanto: '1', tempo: '1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'F', nome: 'Jogo de tabuleiro', quanto: '1', tempo: '4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'F', nome: 'Videogame', quanto: '1', tempo: '4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


  { categoria: 'G', nome: 'Viajar', quanto: '3', tempo: '4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },
  { categoria: 'G', nome: 'Spa day', quanto: '3', tempo: '4h+', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE'] },


]


// ###########################################

// Função para pegar um inteiro enter 0 e o parâmetro
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Cria um array com as categorias do data
let categorias = []
data.forEach((atividade) => {
  categorias.includes(atividade.categoria) ? 0 : categorias.push(atividade.categoria)
})



let categoriasSelect = []
// [READ] Mostra as categorias na tela
function showCategories(titulo) {
  // seleciona o container de categorias
  const categoriasGroup = document.querySelector("#categoriasContainer");
  categoriasGroup.className = "d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mx-lg-5"
  // cria um botão pra cada categoria
  const categoriaUnit = document.createElement("button");
  categoriaUnit.className = "border border-warning text-center py-2 px-3 mx-2 mt-4 bg-warning"
  // coloca o nome de cada categoria, passado por parâmetro, no botão
  const nome = document.createElement("h3")
  nome.innerText = titulo

  // Coloca um evento para qndo clicar no botão de cada categoria
  categoriaUnit.addEventListener("click", () => {
    // Remove a categoria clicada da lista categoriasSelect
    if (categoriasSelect.includes(titulo)) {
      categoriasSelect.splice(categoriasSelect.indexOf(titulo), 1)
      // Adiciona a categoria clicada à lista categoriasSelect
    } else {
      categoriasSelect.push(titulo)
    }
    // Muda a cor do botão SE selecionado
    if (categoriaUnit.className.includes("bg-warning")) {
      categoriaUnit.classList.add("bg-dark");
      categoriaUnit.classList.remove("bg-warning");
    } else if (categoriaUnit.className.includes("bg-dark")) {
      categoriaUnit.classList.remove("bg-dark");
      categoriaUnit.classList.add("bg-warning");
    }
  })

  // Adiciona os elementos que criamos ao elemento pai
  categoriaUnit.append(nome)
  categoriasGroup.appendChild(categoriaUnit)
}


// [READ] Mostra a atividade na tela
const atividade = document.getElementById("atividade")
let atividadeNome = document.createElement("h3")
atividade.className = "ms-4 ps-5 mt-4"
atividade.append(atividadeNome)

// Sorteia o date conforme as categorias selecionadas
sortearButton = document.getElementById("sortearButton")
sortearButton.addEventListener("click", () => {
  if(categoriasSelect.length > 0){
    let filteredList = data.filter((atividade)=>categoriasSelect.includes(atividade.categoria))
    let filteredAct = filteredList.at(getRandomInt(filteredList.length)).nome
    atividadeNome.className = "fs-3"
    atividadeNome.innerText = filteredAct
  } else {
    atividadeNome.className = "fs-6"
    atividadeNome.innerText = "Selecione pelo menos 1 categoria antes de escolher o date"
  } 

  
})


// Mostrar as categorias na tela
categorias.forEach((act) => showCategories(act))


