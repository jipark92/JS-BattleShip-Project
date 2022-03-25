const userFactory = (name, marker) => {
    return {name, marker}
}

const gameModule = (()=>{
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const resetBtns = document.querySelector('.reset-btn');

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

    const setupPlayerShips = () =>{
        const playerDivs = document.querySelectorAll('.player-grid');
        playerDivs.forEach((playerDiv)=>{
            playerDiv.addEventListener('click',()=>{
                playerDiv.textContent = "X";

            })
        })
    };
    setupPlayerShips();

    // const playerAttackMarker = () => {
    //     const computerDivs = document.querySelectorAll('.computer-grid');
    //     computerDivs.forEach((computerDiv)=>{
    //         computerDiv.addEventListener('click',()=>{
    //             computerDiv.style.backgroundColor = "blue";
    //         })
    //     })
    // };
    // playerAttackMarker();


    // const computerAttackMarker = () => {
    //     const playerDivs = document.querySelectorAll('.player-grid');
    //     playerDivs.forEach((playerDiv)=>{
    //         playerDiv.addEventListener('click',()=>{
    //             playerDiv.style.backgroundColor = "blue";
    //         })
    //     })
    // };
    // computerAttackMarker();

    const resetButton = () => {
        resetBtns.addEventListener('click',()=>{
            console.log('refreshed');
            window.location.reload();
        })
    }
    resetButton();

})();