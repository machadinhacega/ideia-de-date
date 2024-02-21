// let data = []
let data = [
  {categoria: 'Comer', nome: 'Fondue', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Comida chinesa', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Açaí', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Sorveteria', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Pastel', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Jantar romântico', quanto: '3', tempo:'1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Pizza', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Comer', nome: 'Café da manhã na cama', quanto: '1', tempo:'1h-3h', pessoas: ['casal'], onde: ['atHome'], locais: []},
  {categoria: 'Comer', nome: 'Fastfood', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: []},
  {categoria: 'Comer', nome: 'Comida japonesa', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Beber', nome: 'Vinho', quanto: '1', tempo:'1h-3h', pessoas: ['casal'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Beber', nome: 'Karaokê', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Beber', nome: 'Bar', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Beber', nome: 'Pub', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Beber', nome: 'Baladinha', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Assistir', nome: 'Filme com pipoca', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome'], locais: []},
  {categoria: 'Assistir', nome: 'Cinema', quanto: '2', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Esporte', nome: 'Jogar basquete', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Esporte', nome: 'Academia', quanto: '2', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Passeio', nome: 'Andar de bicicleta', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Ir ao parque', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Piquenique', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Praia', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Massagem', quanto: '2', tempo:'1h-3h', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Ver o por do sol', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Shopping', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Observar as estrelas', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Museus', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Passeio', nome: 'Exposições', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Jogar', nome: 'Jogar baralho', quanto: '1', tempo:'1h-3h', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Jogar', nome: 'Jogo de tabuleiro', quanto: '1', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Jogar', nome: 'Videogame', quanto: '1', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['atHome', 'goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


  {categoria: 'Planejar', nome: 'Viajar', quanto: '3', tempo:'4h+', pessoas: ['casal', 'grupo'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},
  {categoria: 'Planejar', nome: 'Spa day', quanto: '3', tempo:'4h+', pessoas: ['casal'], onde: ['goingOut'], locais: ['localA', 'localB', 'localC', 'localD', 'localE']},


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
  categoriasGroup.className = "categories__container"
  // cria um botão pra cada categoria
  const categoriaUnit = document.createElement("button");
  categoriaUnit.className = "category__container category__container__disabled"
  // coloca o nome de cada categoria, passado por parâmetro, no botão
  const nome = document.createElement("p")
  nome.innerText = titulo
  nome.className = "category__name"
  const iconContainer = document.createElement("div")
  iconContainer.className = "category__icon__container"
  const iconCat = document.createElement("img")
  iconCat.src = "./assets/img/"+titulo.toLowerCase()+".svg"
  iconCat.className = "category__icon"



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
    // titulo == categoriasSelect[1])
    
    if (categoriaUnit.className.includes("category__container__disabled")){
      categoriaUnit.classList.add("category__container__enabled");
      
      switch (titulo) {
        case categorias[0] :
          categoriaUnit.classList.add("category__container__red")
          break;
        case categorias[1] :
          categoriaUnit.classList.add("category__container__purple")
          break;
        case categorias[2] :
          categoriaUnit.classList.add("category__container__green")
          break;
        case categorias[3] :
          categoriaUnit.classList.add("category__container__blue")
          break;
        case categorias[4] :
          categoriaUnit.classList.add("category__container__orange")
          break;
        case categorias[5] :
          categoriaUnit.classList.add("category__container__bordo")
          break;
        case categorias[6] :
          categoriaUnit.classList.add("category__container__vinho")
          break;
        default:
        case categorias[7] :
          categoriaUnit.classList.add("category__container__pink")
          break;
      }
      
      categoriaUnit.classList.remove("category__container__disabled");

    } else if (categoriaUnit.className.includes("category__container__enabled")) {
      categoriaUnit.className ="category__container category__container__disabled";
    }
  })

  // APEND | Adiciona os elementos que criamos ao elemento pai
  
  // iconContainer.append(iconCat)
  const icon = document.createElement("div")
  icon.className = "icon"
  icon.append(iconContainer, iconCat)
  categoriaUnit.append(icon, nome)
  categoriasGroup.appendChild(categoriaUnit)
}


// [READ] Mostra a atividade na tela
const atividade = document.getElementById("atividade")
let atividadeNome = document.createElement("h3")
const categoriaAtividade = document.createElement("p")
atividade.append(atividadeNome, categoriaAtividade)

// Sorteia o date conforme as categorias selecionadas
sortearButton = document.getElementById("sortearButton")
sortearButton.addEventListener("click", () => {
  if(categoriasSelect.length > 0){
    let filteredList = data.filter((atividade)=>categoriasSelect.includes(atividade.categoria))


    // FILTROS
    const selectCusto = document.getElementById("selectCusto");
    let custo = selectCusto.value
    const selectTempo = document.getElementById("selectTempo");
    let tempo = selectTempo.value
    const selectPessoas = document.getElementById("selectPessoas");
    let pessoas = selectPessoas.value
    const selectLocal = document.getElementById("selectLocal");
    let local = selectLocal.value

    let filteredListCusto
    let filteredListTempo
    let filteredListPessoas
    let filteredListLocal
    
    if(custo == "all"){
      filteredListCusto = filteredList
    } else {
      filteredListCusto = filteredList.filter((atividade)=>atividade.quanto == custo)
    }
    if(tempo == "all"){
      filteredListTempo = filteredListCusto
    } else {
      filteredListTempo = filteredListCusto.filter((atividade)=>atividade.tempo == tempo)
    }
    if(pessoas == "all"){
      filteredListPessoas = filteredListTempo
    } else {
      filteredListPessoas = filteredListTempo.filter((atividade)=>atividade.pessoas.includes(pessoas))
    }
    if(local == "all"){
      filteredListLocal = filteredListPessoas
    } else {
      filteredListLocal = filteredListPessoas.filter((atividade)=>atividade.onde.includes(local))
    }

    let filteredListFinal = filteredListLocal
    // ERRO !!!!!!!!!!!!!!!!!!!!!!!!!!!
    // qndo tem apenas 1 item, ele fica como um obj dentro do obj, por isso nao lê
    // exemplo: comer - custo 3
  

    if(filteredListFinal.length > 0){
      let filteredAct = filteredListFinal.at(getRandomInt(filteredListFinal.length-1)).nome
      let filteredCat = data.filter((atividade)=>atividade.nome==filteredAct)[0].categoria
      atividadeNome.className = "atividade__selected"
      atividadeNome.innerText = filteredAct
      categoriaAtividade.innerText = "["+filteredCat+"]"
    } else {
      atividadeNome.innerText = "Nenhuma atividade deu match com seus filtros"
      categoriaAtividade.innerText = "tente ser menos criteriose"
    }
    
    

  } else {
    atividadeNome.className = "atividade__empty"
    atividadeNome.innerText = "Selecione pelo menos 1 categoria antes de escolher o date"
    categoriaAtividade.innerText = ""
  } 

  
})


// Mostrar as categorias na tela
categorias.forEach((act) => showCategories(act))


