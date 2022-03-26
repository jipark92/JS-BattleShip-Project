const userFactory = (name, marker) => {
    return {name, marker}
}

const gameModule = (()=>{
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const resetBtns = document.querySelector('.reset-btn');
    const rotateBtns = document.querySelector('.rotate-btn');


    let rotate = false;
    let hitMarker = 1;
    let playerHP = 17;
    let computerHP = 17;
    let userList = [];
    let ready = false;

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
        playerDivs.forEach((playerDiv)=>{
            playerDiv.addEventListener('click',()=>{
                if (playerDiv.textContent === userList[0].marker){
                    playerDiv.style.backgroundColor = "red"
                    playerDiv.textContent = hitMarker;
                    playerHP--
                    console.log(playerHP)
                    if (playerHP === 0){
                        lost.textContent = "You Lost!"
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
    makePlayerBigShip();

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
    makePlayerMediumShip();

    const makePlayerMediumShip2 = () => {
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
    makePlayerMediumShip2();

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
    makePlayerSmallShip();

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
    makePlayerTinyShip();


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
    makeCompBigShip();

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
    makeCompMediumShip();

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
    makeCompSmallShip();

    const makeCompSmallShip2 = () => {
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
    makeCompSmallShip2();

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
    makeCompTinyShip();





})();

// const makeShipsHTML = (() => {
//     const player = document.querySelector('.player-board');

    
//     const makeBigShip = () => {

//     }
//     makeBigShip();
    
// })();




// const makeBigShip = () => {
//     for (let i = 0; i < 5; i++){
//         const bigShip = document.createElement('div')
//         bigShip.setAttribute('class', 'big-ship');
//         playerBoard.appendChild(bigShip)
//         console.log(bigShip)
//     }
// }
// makeBigShip();


// if(!rotate){
//     playerDivs[2].textContent = "O"
//     playerDivs[2].style.backgroundColor = "gray"
//     playerDivs[12].textContent = "O"
//     playerDivs[12].style.backgroundColor = "gray"
//     playerDivs[22].textContent = "O"
//     playerDivs[22].style.backgroundColor = "gray"
//     playerDivs[32].textContent = "O"
//     playerDivs[32].style.backgroundColor = "gray"
//     playerDivs[42].textContent = "O"
//     playerDivs[42].style.backgroundColor = "gray"
//     rotate = true;
// } else if (rotate){
//     playerDivs[2].textContent = "O"
//     playerDivs[2].style.backgroundColor = "gray"
//     playerDivs[3].textContent = "O"
//     playerDivs[3].style.backgroundColor = "gray"
//     playerDivs[4].textContent = "O"
//     playerDivs[4].style.backgroundColor = "gray"
//     playerDivs[5].textContent = "O"
//     playerDivs[5].style.backgroundColor = "gray"
//     playerDivs[6].textContent = "O"
//     playerDivs[6].style.backgroundColor = "gray"
// }

// else {
//     playerDiv.style.backgroundColor = "Blue"
// }