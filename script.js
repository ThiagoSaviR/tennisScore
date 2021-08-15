const nomeJogadorA = prompt('Digite o nome do Jogador A');
const nomeJogadorB = prompt('Digite o nome do Jogador B');

const nomeA_HTML = document.getElementById('nomeJogadorA');
const nomeB_HTML = document.getElementById('nomeJogadorB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const gameA_HTML = document.getElementById('gameA');
const gameB_HTML = document.getElementById('gameB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

nomeA_HTML.innerText = nomeJogadorA;
nomeB_HTML.innerText = nomeJogadorB;

let pontoA = 0;
let pontoB = 0;
let gameA = 0;
let gameB = 0;
let setA = 0;
let setB = 0;
let setsAnterioresA = [];
let setsAnterioresB = [];

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
gameA_HTML.innerText = gameA;
gameB_HTML.innerText = gameB;
setA_HTML.innerText = setA;
setB_HTML.innerText = setB;



pontoA_HTML.addEventListener('click', function () {//o que estiver aqui dentro será executado quando o pontoA_HTML for clicado
    if ((pontoA == 40 && pontoB == 40) || (pontoA == 40 && pontoB == 'AD')){
        pontoA = String('AD');
    } else if (pontoA == 30) {
        pontoA = pontoA + 10;
    } else{
        pontoA = pontoA + 15;
    }
    pontoA_HTML.innerText = pontoA;
    verificarFimDoGame();
});

pontoB_HTML.addEventListener('click', function () {
    if ((pontoB == 40 && pontoA == 40) || (pontoB == 40 && pontoA == 'AD')){
        pontoB = String('AD');
    }else if (pontoB == 30) {
        pontoB = pontoB + 10;
    } else{
        pontoB = pontoB + 15;
    }
    pontoB_HTML.innerText = pontoB;
    verificarFimDoGame();
});

function verificarFimDoGame() {
    if ((pontoA == 'AD15') || (pontoA > 40 && pontoB < 40)){
        alert('O Jogador ' + nomeJogadorA + ' venceu o Game!');
        gameA = gameA + 1;
        gameA_HTML.innerText = gameA;
        verificarFimDoSet ()
        zerarPontuaçãoDoGameAnterior()
      
    } 
    if ((pontoB == 'AD15') || (pontoB > 40 && pontoA < 40)){
        alert('O Jogador ' + nomeJogadorB + ' venceu o Game!');
        gameB = gameB + 1;
        gameB_HTML.innerText = gameB;
        verificarFimDoSet ()
        zerarPontuaçãoDoGameAnterior()
    }
    
    if (pontoA == 'AD' && pontoB == 'AD'){
        pontoA = 40;
        pontoB = 40;
        pontoA_HTML.innerText = pontoA;
        pontoB_HTML.innerText = pontoB;
    }
}

function zerarPontuaçãoDoGameAnterior() {
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
}

function verificarFimDoSet (){
    if (gameA >= 6 && gameA - gameB >= 2){
        alert('O jogador ' + nomeJogadorA + ' venceu o set!');
        setA =  setA + 1
        setA_HTML.innerText = setA
        verificarFimDoJogo()
        salvarEzerarPontuaçãoDoSetAnterior()
    }
    if (gameB >= 6 && gameB - gameA >= 2){
        alert('O jogador ' + nomeJogadorB + ' venceu o set!');
        setB =  setB + 1;
        setB_HTML.innerText = setB
        verificarFimDoJogo()
        salvarEzerarPontuaçãoDoSetAnterior()
    }
}

function salvarEzerarPontuaçãoDoSetAnterior() {
    setsAnterioresA.push(gameA);
    setsAnterioresB.push(gameB);
    gameA = 0;
    gameB = 0;
    gameA_HTML.innerText = gameA;
    gameB_HTML.innerText = gameB;
}

function verificarFimDoJogo() {
    if (setA == 2) {
        alert('O jogador ' + nomeJogadorA + ' venceu o Jogo por ' + setA + ' a ' + setB );
        zerarPontuaçãoDoJogo()
    } 
    if (setB == 2) {
        alert('O jogador ' + nomeJogadorB + ' venceu o Jogo por ' + setB + ' a ' + setA );
        zerarPontuaçãoDoJogo()
    } 
}

function zerarPontuaçãoDoJogo() {
    setA = 0;
    setB = 0;
    setA_HTML.innerText = setA;
    setB_HTML.innerText = setB;
}
