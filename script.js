//Apresentação

alert("Oi, me chamo Guth, vamos jogar Pedra, Papel e Tesoura, mas primeiro..")


//Dados do Jogador

let name = prompt("Qual seu nome")


//Prólogo

alert("Entendi. Bem vindo(a) " + name + ". Vamos começar!! É só selecionar o item na próxima tela")


//Guth

let robot = "Guth"
let bag = ["Pedra", "Papel", "Tesoura"]

let item = Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
} 

let player2 = bag.sample();
