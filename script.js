// Removendo tela inicial após clique em start
const start = document.getElementById('btn-start');
const telaInicial = [...document.querySelectorAll('#table-games, #jogador-vez')]
const telaGameValidated = document.getElementById('table-game-validated')



start.addEventListener('click', function () {
    const playersInput = [...document.querySelectorAll('#player-one, #player-two')]
    const playersNameOne = playersInput[0].value;
    const playersNameTwo = playersInput[1].value;
    playersNameOne && playersNameTwo ? (
        telaInicial.map(telaInicial => telaInicial.remove()),
        telaGameValidated.classList.remove('display-none'), telaGameValidated.classList.add('d-flex')) :
        alert('Ops! \nVocê precisa definir o nome dos dois jogadores.')
})

const cells = document.querySelectorAll('.cell');
const board = document.querySelector('#board');
const gameEndMessage = document.querySelector('[data-game-end-message]');
const gameEndElement = document.querySelector('#gameEndElement');
const restartButton = document.querySelector('#restartButton');
let xClass = 'x';
let oClass = 'o';
let xTurn;
startGame()
function startGame() {
    xTurn = true;
    board.classList.add('x');

    cells.forEach(cell => {
        cell.classList.remove(xClass);
        cell.classList.remove(oClass);
        board.classList.replace('o', 'x');

        cell.addEventListener('click', handleClick, { once: true })

    });
    restartButton.addEventListener('click', startGame)
    document.querySelector('main').classList.remove('end')
}
