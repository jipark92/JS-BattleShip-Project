const userFactory = (name, marker) => {
    return {name, marker}
}

const gameModule = (()=>{
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const resetBtns = document.querySelector('.reset-btn');
    const rotateBtns = document.querySelector('.rotate-btn');


    let rotate = false;
    let userList = [];

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

    const makePlayerBigShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
                playerDivs[2].textContent = "O"
                playerDivs[2].style.backgroundColor = "gray"
                playerDivs[12].textContent = "O"
                playerDivs[12].style.backgroundColor = "gray"
                playerDivs[22].textContent = "O"
                playerDivs[22].style.backgroundColor = "gray"
                playerDivs[32].textContent = "O"
                playerDivs[32].style.backgroundColor = "gray"
                playerDivs[42].textContent = "O"
                playerDivs[42].style.backgroundColor = "gray"
        }
    }
    makePlayerBigShip();

    const makePlayerMediumShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[58].textContent = "O"
            playerDivs[58].style.backgroundColor = "gray"
            playerDivs[57].textContent = "O"
            playerDivs[57].style.backgroundColor = "gray"
            playerDivs[56].textContent = "O"
            playerDivs[56].style.backgroundColor = "gray"
            playerDivs[55].textContent = "O"
            playerDivs[55].style.backgroundColor = "gray"
        }
    }
    makePlayerMediumShip();

    const makePlayerMediumShip2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[96].textContent = "O"
            playerDivs[96].style.backgroundColor = "gray"
            playerDivs[86].textContent = "O"
            playerDivs[86].style.backgroundColor = "gray"
            playerDivs[76].textContent = "O"
            playerDivs[76].style.backgroundColor = "gray"
        }
    };
    makePlayerMediumShip2();


    const makePlayerSmallShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid')
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[80].textContent = "O"
            playerDivs[80].style.backgroundColor = "gray"
            playerDivs[81].textContent = "O"
            playerDivs[81].style.backgroundColor = "gray"
            playerDivs[82].textContent = "O"
            playerDivs[82].style.backgroundColor = "gray"
        }
    };
    makePlayerSmallShip();

    const makePlayerTinyShip = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            playerDivs[25].textContent = "O"
            playerDivs[25].style.backgroundColor = "gray"
            playerDivs[26].textContent = "O"
            playerDivs[26].style.backgroundColor = "gray"
        }
    };
    makePlayerTinyShip();

    // const playerAttackMarker = () => {
    //     const computerDivs = document.querySelectorAll('.computer-grid');
    //     computerDivs.forEach((computerDiv)=>{
    //         computerDiv.addEventListener('click',()=>{
    //             computerDiv.style.backgroundColor = "blue";
    //         })
    //     })
    // };
    // playerAttackMarker();


    const computerAttackMarker = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        playerDivs.forEach((playerDiv)=>{
            playerDiv.addEventListener('click',()=>{
                if (playerDiv.textContent === "O"){
                    playerDiv.style.backgroundColor = "red"
                } else {
                    playerDiv.style.backgroundColor = "Blue"
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