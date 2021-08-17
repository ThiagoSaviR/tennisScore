// Pergunta o nome dos jogadores e guarda nas constantes.
const nomeJogadorA = prompt('Digite o nome do Jogador A');
const nomeJogadorB = prompt('Digite o nome do Jogador B');

// Manipula a DOM puxando os elementos do HTML e guarda nas constantes.
const nomeA_HTML = document.getElementById('nomeJogadorA');
const nomeB_HTML = document.getElementById('nomeJogadorB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const gameA_HTML = document.getElementById('gameA');
const gameB_HTML = document.getElementById('gameB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

// escreve o nome que o usuário declarou na tela.
nomeA_HTML.innerText = nomeJogadorA;
nomeB_HTML.innerText = nomeJogadorB;

// variáveis que manipulam a pontuação do jogo. Todas iniciadas com 0 ou vazias.
let pontoA = 0;
let pontoB = 0;
let gameA = 0;
let gameB = 0;
let setA = 0;
let setB = 0;

// escreve o valor da pontuação inicial na tela.
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
gameA_HTML.innerText = gameA;
gameB_HTML.innerText = gameB;
setA_HTML.innerText = setA;
setB_HTML.innerText = setB;


//O que estiver aqui dentro será executado quando o pontoA_HTML for clicado.
pontoA_HTML.addEventListener('click', function () {
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
//O que estiver aqui dentro será executado quando o pontoB_HTML for clicado.
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

// Função que verifica a pontuação dos jogadores e exibe menssagem de vitória do jogador. 
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
    // Caso os dois empatem em Advance o placar volta ao "40 x 40".
    if (pontoA == 'AD' && pontoB == 'AD'){
        pontoA = 40;
        pontoB = 40;
        pontoA_HTML.innerText = pontoA;
        pontoB_HTML.innerText = pontoB;
    }
}
// Função que zera os pontos e excreve o placar na tela em caso de vitória de um dos jogadores.
function zerarPontuaçãoDoGameAnterior() {
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
}

// Função que verifica o game dos jogadores e exibe menssagem de vitória do jogador.
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

// Função que zera os games e excreve o placar na tela em caso de vitória de um dos jogadores.
function salvarEzerarPontuaçãoDoSetAnterior() {
    gameA = 0;
    gameB = 0;
    gameA_HTML.innerText = gameA;
    gameB_HTML.innerText = gameB;
}

// Função que verifica o set dos jogadores e exibe menssagem de vitória do jogador.
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
// Função que zera e escreve os sets na tela.
function zerarPontuaçãoDoJogo() {
    setA = 0;
    setB = 0;
    setA_HTML.innerText = setA;
    setB_HTML.innerText = setB;
}