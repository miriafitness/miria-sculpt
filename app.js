const STORAGE = "miria_treinos";

let dados = JSON.parse(
localStorage.getItem(STORAGE)
) || {}

function salvar(){

localStorage.setItem(
STORAGE,
JSON.stringify(dados)
)

}

function render(){

document
.querySelectorAll(".treino")
.forEach(section=>{

let dia = section.dataset.dia

let lista = section.querySelector(".lista")

lista.innerHTML=""

if(!dados[dia]) dados[dia]=[]

dados[dia].forEach((ex,i)=>{

let li=document.createElement("li")

li.textContent=ex

lista.appendChild(li)

})

})

}

function addExercise(dia){

let nome = prompt("Nome do exercício")

if(!nome) return

if(!dados[dia]) dados[dia]=[]

dados[dia].push(nome)

salvar()

render()

}

render()
