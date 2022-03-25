const gameModule = (()=>{
    
    const playerContainer = document.querySelector('.player-board');
    const computerContainer = document.querySelector('.computer-board')

    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');


    const makePlayerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'player-grid')
            playerContainer.appendChild(div);
        }
    }
    makePlayerGrid(10,10);

    const makeComputerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'computer-grid')
            computerBoard.appendChild(div);
        }
    }
    makeComputerGrid(10,10);

})();