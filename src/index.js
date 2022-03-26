const userFactory = (name, marker) => {
    return {name, marker};
};

const gameModule = (()=>{
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const resetBtns = document.querySelector('.reset-btn');
    const gameStartedText = document.querySelector('.game-started');
    const startBtns = document.querySelector('.start-btn');
    const pressStartText = document.querySelector('.press-start');


    let hitMarker = 1;
    let playerHP = 17;
    let computerHP = 17;
    let userList = [];
    let ready = false;
    let playerTurn = true;
    let computerTurn = false;

    const disabledBoard = () =>{
        window.addEventListener('DOMContentLoaded',()=>{
            playerBoard.classList.add('disabled')
            computerBoard.classList.add('disabled')
        })
    }
    disabledBoard();

    const startGame = () => {
        startBtns.addEventListener('click',(e)=>{
            e.preventDefault();
            if (ready === false){
                ready = true;
                playerBoard.classList.remove('disabled');
                computerBoard.classList.remove('disabled');
                gameStartedText.textContent = "Game Started!"
                pressStartText.style.visibility = "hidden";
            }
        })
    };

    //submit users
    const addUsers = () => {
        const player = userFactory("Player", "X")
        const computer = userFactory("Computer", "O")
        userList.push(player)
        userList.push(computer)
    }
    addUsers();

    const makePlayerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'player-grid')
            playerBoard.appendChild(div);
        }
    };
    makePlayerGrid(10,10);

    const makeComputerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'computer-grid')
            computerBoard.appendChild(div);
        }
    };
    makeComputerGrid(10,10);

    const playerAttackMarker = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        const win = document.querySelector('.win');
        computerDivs.forEach((computerDiv)=>{
            computerDiv.addEventListener('click',()=>{
                if (computerDiv.textContent === userList[1].marker){
                    computerDiv.style.backgroundColor = "red"
                    computerDiv.textContent = hitMarker;
                    computerHP--
                    console.log(computerHP)
                    if (computerHP === 0){
                        win.textContent = "You Win!"
                        gameStartedText.style.visibility = "hidden";
                        pauseBoard();
                    } 
                } else if(computerDiv.textContent === "1"){
                    return
                } else {
                    computerDiv.style.backgroundColor = "blue"
                } 
            })
        })
    };
    playerAttackMarker();

    const computerAttackMarker = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        const lost = document.querySelector('.lost');
        const gameStartedText = document.querySelector('.game-started');
        playerDivs.forEach((playerDiv)=>{
            playerDiv.addEventListener('click',()=>{
                if (playerDiv.textContent === userList[0].marker){
                    playerDiv.style.backgroundColor = "red"
                    playerDiv.textContent = hitMarker;
                    playerHP--
                    console.log(playerHP)
                    if (playerHP === 0){
                        lost.textContent = "You Lost!"
                        gameStartedText.style.visibility = "hidden";
                        pauseBoard();
                    } 
                } else if(playerDiv.textContent === "1"){
                    return
                } else {
                    playerDiv.style.backgroundColor = "blue"
                } 
            })
        })
    };
    computerAttackMarker();

    const resetButton = () => {
        resetBtns.addEventListener('click',()=>{
            console.log('refreshed');
            window.location.reload();
        })
    }
    resetButton();

    const pauseBoard = () => {
        ready = false
        playerBoard.classList.add('disabled')
        computerBoard.classList.add('disabled')
        startBtns.classList.add('disabled')
    }

    const randomGenerator = () =>{
        return Math.floor(Math.random() * 3); 
    }
    // console.log(randomGenerator())

    const playerShipPosition = (number) => {
        const randomBtns = document.querySelector('.random-btn')
        const instructions = document.querySelectorAll('.instruct');
        randomBtns.addEventListener('click',()=>{
            let num = randomGenerator();
            if (num === 0){
                playerShipChoices1();
                computerShipChoices1();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                hideInstruction(instructions);
            } else if (num === 1){
                playerShipChoices2();
                computerShipChoices2();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                hideInstruction(instructions);
            } else if (num === 2){
                playerShipChoices3();
                computerShipChoices3();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                hideInstruction(instructions);
            }
        })
    }
    playerShipPosition(randomGenerator());


    const startInstruction = () =>{
        const pressStartText = document.querySelector('.press-start');
        pressStartText.textContent = "Press Start Button"
    };

    const hideInstruction = (instructions) =>{
        instructions.forEach((instruction)=>{
            instruction.style.visibility = "hidden";
        })
    }

    const disableRndmBtns = (randomBtns) => {
        randomBtns.classList.add('disabled')
    }















//make player ships 1
    const makePlayerBigShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[2].textContent = userList[0].marker;
            playerDivs[12].textContent = userList[0].marker;
            playerDivs[22].textContent = userList[0].marker;
            playerDivs[32].textContent = userList[0].marker;
            playerDivs[42].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }

        }
    }
    // makePlayerBigShip();

    const makePlayerMediumShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[58].textContent = userList[0].marker;
            playerDivs[57].textContent = userList[0].marker;
            playerDivs[56].textContent = userList[0].marker;
            playerDivs[55].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makePlayerMediumShip();

    const makePlayerMediumShips = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[96].textContent = userList[0].marker;
            playerDivs[86].textContent = userList[0].marker;
            playerDivs[76].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerMediumShips();

    const makePlayerSmallShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[80].textContent = userList[0].marker;
            playerDivs[81].textContent = userList[0].marker;
            playerDivs[82].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerSmallShip2();

    const makePlayerTinyShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[25].textContent = userList[0].marker;
            playerDivs[26].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerTinyShip();

















    //make 2nd option player ships
    const makePlayerBigShip2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[17].textContent = userList[0].marker;
            playerDivs[27].textContent = userList[0].marker;
            playerDivs[37].textContent = userList[0].marker;
            playerDivs[47].textContent = userList[0].marker;
            playerDivs[57].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }

        }
    }
    // makePlayerBigShip2();

    const makePlayerMediumShip2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[99].textContent = userList[0].marker;
            playerDivs[89].textContent = userList[0].marker;
            playerDivs[79].textContent = userList[0].marker;
            playerDivs[69].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makePlayerMediumShip2();

    const makePlayerMediumShips2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[12].textContent = userList[0].marker;
            playerDivs[13].textContent = userList[0].marker;
            playerDivs[14].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerMediumShips2();

    const makePlayerSmallShip2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[73].textContent = userList[0].marker;
            playerDivs[74].textContent = userList[0].marker;
            playerDivs[75].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerSmallShip2();

    const makePlayerTinyShip2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[52].textContent = userList[0].marker;
            playerDivs[53].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerTinyShip2();












    //make 3rd option player ships
    const makePlayerBigShip3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[73].textContent = userList[0].marker;
            playerDivs[74].textContent = userList[0].marker;
            playerDivs[75].textContent = userList[0].marker;
            playerDivs[76].textContent = userList[0].marker;
            playerDivs[77].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }

        }
    }
    // makePlayerBigShip3();

    const makePlayerMediumShip3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[15].textContent = userList[0].marker;
            playerDivs[16].textContent = userList[0].marker;
            playerDivs[17].textContent = userList[0].marker;
            playerDivs[18].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makePlayerMediumShip3()
    // makePlayerMediumShip3();

    const makePlayerMediumShips3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[20].textContent = userList[0].marker;
            playerDivs[21].textContent = userList[0].marker;
            playerDivs[22].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerMediumShips3();

    const makePlayerSmallShip3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[71].textContent = userList[0].marker;
            playerDivs[61].textContent = userList[0].marker;
            playerDivs[51].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerSmallShip3();

    const makePlayerTinyShip3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[46].textContent = userList[0].marker;
            playerDivs[47].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray"
            }
        }
    };
    // makePlayerTinyShip3();







    const playerShipChoices3 = () => {
        makePlayerBigShip3();
        makePlayerMediumShip3();
        makePlayerMediumShips3();
        makePlayerSmallShip3();
        makePlayerTinyShip3();
    }

    const playerShipChoices2 = () => {
        makePlayerBigShip2();
        makePlayerMediumShip2();
        makePlayerMediumShips2();
        makePlayerSmallShip2();
        makePlayerTinyShip2();
    }

    const playerShipChoices1 = () => {
        makePlayerBigShip();
        makePlayerMediumShip();
        makePlayerMediumShips();
        makePlayerSmallShip();
        makePlayerTinyShip();
    }









    const computerShipChoices1 = () => {
        makeCompBigShip()
        makeCompMediumShip();
        makeCompSmallShip()
        makeCompSmallShips();
        makeCompTinyShip();
    }

    const computerShipChoices2 = () => {
        makeCompBigShip2()
        makeCompMediumShip2();
        makeCompSmallShip2()
        makeCompSmallShips2();
        makeCompTinyShip2();
    }

    const computerShipChoices3 = () => {
        makeCompBigShip3()
        makeCompMediumShip3();
        makeCompSmallShip3()
        makeCompSmallShips3();
        makeCompTinyShip3();
    }





    //make enemy ships
    const makeCompBigShip = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[1].textContent = userList[1].marker;
            computerDivs[2].textContent = userList[1].marker;
            computerDivs[3].textContent = userList[1].marker;
            computerDivs[4].textContent = userList[1].marker;
            computerDivs[5].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompBigShip();

    const makeCompMediumShip = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[10].textContent = userList[1].marker;
            computerDivs[20].textContent = userList[1].marker;
            computerDivs[30].textContent = userList[1].marker;
            computerDivs[40].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompMediumShip();

    const makeCompSmallShip = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[55].textContent = userList[1].marker;
            computerDivs[56].textContent = userList[1].marker;
            computerDivs[57].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompSmallShip();

    const makeCompSmallShips = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[70].textContent = userList[1].marker;
            computerDivs[71].textContent = userList[1].marker;
            computerDivs[72].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompSmallShips();

    const makeCompTinyShip = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[78].textContent = userList[1].marker;
            computerDivs[79].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompTinyShip();

















    //make enemyship 2
    const makeCompBigShip2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[15].textContent = userList[1].marker;
            computerDivs[25].textContent = userList[1].marker;
            computerDivs[35].textContent = userList[1].marker;
            computerDivs[45].textContent = userList[1].marker;
            computerDivs[55].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompBigShip2();

    const makeCompMediumShip2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[31].textContent = userList[1].marker;
            computerDivs[41].textContent = userList[1].marker;
            computerDivs[51].textContent = userList[1].marker;
            computerDivs[61].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompMediumShip2();

    const makeCompSmallShip2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[75].textContent = userList[1].marker;
            computerDivs[76].textContent = userList[1].marker;
            computerDivs[77].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompSmallShip2();

    const makeCompSmallShips2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[80].textContent = userList[1].marker;
            computerDivs[81].textContent = userList[1].marker;
            computerDivs[82].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompSmallShips2();

    const makeCompTinyShip2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            computerDivs[8].textContent = userList[1].marker;
            computerDivs[9].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                computerDivs[i].style.backgroundColor = "gray"
            }
        }
    }
    // makeCompTinyShip2();


















//make enemyship 3
const makeCompBigShip3 = () => {
    const computerDivs = document.querySelectorAll('.computer-grid');
    for (let i = 0; i < computerDivs.length;i++){
        computerDivs[25].textContent = userList[1].marker;
        computerDivs[26].textContent = userList[1].marker;
        computerDivs[27].textContent = userList[1].marker;
        computerDivs[28].textContent = userList[1].marker;
        computerDivs[29].textContent = userList[1].marker;
        if (computerDivs[i].textContent === userList[1].marker){
            computerDivs[i].style.backgroundColor = "gray"
        }
    }
}
// makeCompBigShip3();

const makeCompMediumShip3 = () => {
    const computerDivs = document.querySelectorAll('.computer-grid');
    for (let i = 0; i < computerDivs.length;i++){
        computerDivs[55].textContent = userList[1].marker;
        computerDivs[65].textContent = userList[1].marker;
        computerDivs[75].textContent = userList[1].marker;
        computerDivs[85].textContent = userList[1].marker;
        if (computerDivs[i].textContent === userList[1].marker){
            computerDivs[i].style.backgroundColor = "gray"
        }
    }
}
// makeCompMediumShip3();

const makeCompSmallShip3 = () => {
    const computerDivs = document.querySelectorAll('.computer-grid');
    for (let i = 0; i < computerDivs.length;i++){
        computerDivs[41].textContent = userList[1].marker;
        computerDivs[42].textContent = userList[1].marker;
        computerDivs[43].textContent = userList[1].marker;
        if (computerDivs[i].textContent === userList[1].marker){
            computerDivs[i].style.backgroundColor = "gray"
        }
    }
}
// makeCompSmallShip3();

const makeCompSmallShips3 = () => {
    const computerDivs = document.querySelectorAll('.computer-grid');
    for (let i = 0; i < computerDivs.length;i++){
        computerDivs[70].textContent = userList[1].marker;
        computerDivs[80].textContent = userList[1].marker;
        computerDivs[90].textContent = userList[1].marker;
        if (computerDivs[i].textContent === userList[1].marker){
            computerDivs[i].style.backgroundColor = "gray"
        }
    }
}
// makeCompSmallShips3();

const makeCompTinyShip3 = () => {
    const computerDivs = document.querySelectorAll('.computer-grid');
    for (let i = 0; i < computerDivs.length;i++){
        computerDivs[1].textContent = userList[1].marker;
        computerDivs[2].textContent = userList[1].marker;
        if (computerDivs[i].textContent === userList[1].marker){
            computerDivs[i].style.backgroundColor = "gray"
        }
    }
}
// makeCompTinyShip3();




    
})();

