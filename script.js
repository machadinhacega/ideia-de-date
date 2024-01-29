// let data = []
let data = [
  {categoria: 'A', nome: 'Fondue', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Comida chinesa', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Açaí', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Sorveteria', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Pastel', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Jantar romântico', quanto: '3', tempo:'1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Pizza', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'A', nome: 'Café da manhã na cama', quanto: '1', tempo:'1h-3h', pessoas: ['casal'], onde: ['atHome'], locais: []},
  {categoria: 'A', nome: 'Fastfood', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: []},
  {categoria: 'A', nome: 'Comida japonesa', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'B', nome: 'Vinho', quanto: '1', tempo:'1h-3h', pessoas: ['casal'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'B', nome: 'Karaokê', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'B', nome: 'Bar', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'B', nome: 'Pub', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'B', nome: 'Baladinha', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'C', nome: 'Filme com pipoca', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: []},
  {categoria: 'C', nome: 'Cinema', quanto: '2', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'D', nome: 'Jogar basquete', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'D', nome: 'Academia', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'E', nome: 'Andar de bicicleta', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Ir ao parque', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Piquenique', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Praia', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Massagem', quanto: '2', tempo:'1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Ver o por do sol', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Shopping', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Observar as estrelas', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Museus', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'E', nome: 'Exposições', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'F', nome: 'Jogar baralho', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'F', nome: 'Jogo de tabuleiro', quanto: '1', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'F', nome: 'Videogame', quanto: '1', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'G', nome: 'Viajar', quanto: '3', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'G', nome: 'Spa day', quanto: '3', tempo:'4h+', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


]


// ###########################################

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log('##### CATEGORIAS #####')
let categorias = []
data.forEach((act) => categorias.push(act.categoria))
categorias = categorias.filter((este, i) => categorias.indexOf(este) === i);
console.log(categorias)

console.log('##### CATEGORIA ESCOLHIDA #####')
let selectedCat = categorias.at(getRandomInt(categorias.length))
console.log(selectedCat)

console.log('##### ATIVIDADE ESCOLHIDA #####')
let filteredList = data.filter((act)=>act.categoria == selectedCat)

let filteredAct = filteredList.at(getRandomInt(filteredList.length)).nome
console.log(filteredAct)

// ###########################################

// READ ATIVIDADE
const atividade = document.getElementById("atividade")
atividadeNome = document.createElement("h3")
atividade.className = "ms-4 ps-5 mt-4"
atividade.append(atividadeNome)



// READ categorias
function showCategories(titulo){
  const categoriasGroup = document.querySelector("#categoriasContainer");
  // categoriasGroup.className = "d-flex align-items-center collum"
  categoriasGroup.className = "d-flex flex-wrap justify-content-center justify-content-lg-start mt-3 mx-lg-5"
  
  const categoriaUnit = document.createElement("button"); 
  categoriaUnit.className = "border border-warning text-center py-2 px-3 mx-2 mt-4 bg-warning"
  
  const nome = document.createElement("h3")
  nome.innerText = titulo
  

  // Escolhe uma atividade da categoria selecionada
  categoriaUnit.addEventListener("click",() => {
    let filteredList = data.filter((act)=>act.categoria == nome.innerText)
    let filteredAct = filteredList.at(getRandomInt(filteredList.length)).nome
    console.log(filteredAct)
    atividadeNome.innerText = filteredAct
  })

  categoriaUnit.append(nome)
  categoriasGroup.appendChild(categoriaUnit)
}






// Mostrar as categorias na tela
categorias.forEach((act)=>showCategories(act))

