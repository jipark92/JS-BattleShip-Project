const userFactory = (name, marker, hp) => {
    return {name, marker, hp};
};

const gameModule = (()=>{
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const resetBtns = document.querySelector('.reset-btn');
    const gameStartedText = document.querySelector('.game-started');
    const startBtns = document.querySelector('.start-btn');
    const pressStartText = document.querySelector('.press-start');
    const playerTurnText = document.querySelector('.player-turn');
    const randomBtns = document.querySelector('.random-btn')
    const instructions = document.querySelectorAll('.instruct');
    const directionContainer = document.querySelector('.directions-container');
    const container = document.querySelector('.container');
    const pick = document.querySelector('.pick');

    let hitMarker = 1;
    let userList = [];
    let ready = false;
    let playerTurn = true;
    let opponentTurn = false;
    let playerVsPlayer2 = false;

    //disables board and some buttons on load.
    const disabledBoard = () =>{
        window.addEventListener('DOMContentLoaded',()=>{
            startBtns.classList.add('disabled')
            playerBoard.classList.add('disabled');
            computerBoard.classList.add('disabled');
            randomBtns.classList.add('disabled')
        })
    };
    disabledBoard();

    //start button starts the game.
    const startGame = () => {
        startBtns.addEventListener('click',(e)=>{
            e.preventDefault();
            if (!ready){
                ready = true;
                playerBoard.classList.remove('disabled');
                computerBoard.classList.remove('disabled');
                gameStartedText.textContent = "Game Started!";
                playerTurnText.textContent = "Player 1's Turn";
                pressStartText.remove();
                directionContainer.remove();
                startBtns.classList.add('disabled');
                startBtns.remove();
                pick.textContent = "";
                hideInstruction(instructions);
            }
        })
    };

    //submit users
    const addUsers = () => {
        const player = userFactory("Player", "X", 19);
        const computer = userFactory("Computer", "O", 19);
        userList.push(player);
        userList.push(computer);
    }
    addUsers();

    //make player grid
    const makePlayerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'player-grid');
            playerBoard.appendChild(div);
        }
    };
    makePlayerGrid(10,10);

    //make enemy grid
    const makeComputerGrid = (col, row) => {
        for (let i = 0; i < col * row; i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'computer-grid');
            computerBoard.appendChild(div);
        }
    };
    makeComputerGrid(10,10);

    //plaer vs computer setup
    const playerVsComp = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        const gameStartedText = document.querySelector('.game-started');

        computerDivs.forEach((computerDiv)=>{
            computerDiv.addEventListener('click',()=>{
                computerRandomAttack()
                //prevent same spot click
                if (computerDiv.textContent === "2")return;
                if (computerDiv.textContent === "1")return;
                if(playerTurn && !opponentTurn){
                    if (computerDiv.textContent === userList[1].marker){
                        computerDiv.style.backgroundColor = "red";
                        computerDiv.textContent = hitMarker;
                        playerTurnText.textContent = "Computer's Turn";
                        logLists("Player 1: Enemy Ship Hit!");
                        userList[1].hp--;
                        playerTurn = false;
                        opponentTurn = true;
                        computerRandomAttack()
                        if (userList[1].hp === 0){
                            winOrLostText("YOU WON!", "blue")
                            gameStartedText.style.visibility = "hidden";
                            pauseBoard();
                        } 
                    } else if(computerDiv.textContent === "1"){
                        playerTurn = false;
                        opponentTurn = true;
                        computerRandomAttack();
                        return;
                    } else {
                        computerDiv.style.backgroundColor = "blue";
                        computerDiv.textContent = "2";
                        logLists("Player 1: Missed!")
                        playerTurnText.textContent = "Computer's Turn";
                        playerTurn = false;
                        opponentTurn = true;
                        computerRandomAttack();
                    } 
                    
                }
            })
        })
    };

    //player vs player
    const playerVsPlayer = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        const gameStartedText = document.querySelector('.game-started');

        computerDivs.forEach((computerDiv)=>{
            computerDiv.addEventListener('click',()=>{
                //prevent same spot click
                if (computerDiv.textContent === "2")return;
                if (computerDiv.textContent === "1")return;
                if(playerTurn && !opponentTurn){
                    if (computerDiv.textContent === userList[1].marker){
                        computerDiv.style.backgroundColor = "red";
                        computerDiv.textContent = hitMarker;
                        playerTurnText.textContent = "Player 2's Turn";
                        logLists("Player 1: Enemy Ship Hit!");
                        userList[1].hp--;
                        playerTurn = false;
                        opponentTurn = true;
                        if (userList[1].hp === 0){
                            winOrLostText("YOU WON!", "blue")
                            gameStartedText.style.visibility = "hidden";
                            pauseBoard();
                        } 
                    } else if(computerDiv.textContent === "1"){
                        playerTurn = false;
                        opponentTurn = true;
                        return;
                    } else {
                        computerDiv.style.backgroundColor = "blue";
                        computerDiv.textContent = "2"
                        logLists("Player 1: Missed!");
                        playerTurnText.textContent = "Player 2's Turn";
                        playerTurn = false;
                        opponentTurn = true;
                    } 
                    
                }
            })
        })
    };

    //computer makes random attack
    const computerRandomAttack = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        const gameStartedText = document.querySelector('.game-started');

        let randomAttack = Math.floor(Math.random()*100);
        //prevent same spot click
        if (playerDivs[randomAttack].textContent === "2")return;
        if (playerDivs[randomAttack].textContent === "1")return

        if (opponentTurn){
            if(playerDivs[randomAttack].textContent === "1"){
                return;
            } else {
            playerDivs[randomAttack].style.backgroundColor = "blue";
            logLists("Computer: Missed!");
            playerTurnText.textContent = "Player 1's Turn";
            playerTurn = true;
            opponentTurn = false;
            }
            if (playerDivs[randomAttack].textContent === userList[0].marker){
                playerDivs[randomAttack].style.backgroundColor = "red";
                playerTurnText.textContent = "Player 1's Turn";

                logLists("Computer: Player 1 Ship Hit!")
                playerDivs[randomAttack].textContent = hitMarker;
                userList[0].hp--;
                if(userList[0].hp === 0){
                    winOrLostText("YOU LOST!", "red")
                    gameStartedText.style.visibility = "hidden";
                    pauseBoard();
                }
            } 
        } 
    };

    //player 2
    const player2AttackMarker = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        const gameStartedText = document.querySelector('.game-started');
        
        playerDivs.forEach((playerDiv)=>{
            playerDiv.addEventListener('click',()=>{
                if (playerDiv.textContent === "2")return;
                if (playerDiv.textContent === "1")return;
                
                if(opponentTurn){
                    if (playerDiv.textContent === userList[0].marker){
                        playerDiv.style.backgroundColor = "red";
                        playerDiv.textContent = hitMarker;
                        playerTurnText.textContent = "Player 1's Turn";
                        logLists("Player 2: Player 1 Ship Hit!")
                        userList[0].hp--;
                        opponentTurn = false;
                        playerTurn = true;
                    if (userList[0].hp === 0){
                        winOrLostText("YOU LOST!", "red")
                        gameStartedText.style.visibility = "hidden";
                        pauseBoard();
                    } 
                } else if(playerDiv.textContent === "1"){
                    return;
                } else {
                    playerDiv.style.backgroundColor = "blue";
                    playerDiv.textContent = "2";
                    logLists("Player 2: Missed!");
                    playerTurnText.textContent = "Player 1's Turn";
                    opponentTurn = false;
                    playerTurn = true;
                } 
                }
            })
        })
    };

    //select player 2 or computer
    const againstWhoFunction = () =>{
        const againstPlayerBtns = document.querySelector('.againstplayer-btn');
        const againstComputerBtns = document.querySelector('.againstcpu-btn');
        const player2Name = document.querySelector('.player2-text');
        const againstContainer = document.querySelector('.against-container');

        againstPlayerBtns.addEventListener('click',()=>{
            pick.textContent = "Chose Against Player 2.";
            player2Name.textContent = "Player 2";
            playerVsPlayer();
            player2AttackMarker();
            againstPlayerBtns.classList.add('disabled');
            againstComputerBtns.classList.add('disabled');
            againstContainer.remove();
            randomBtns.classList.remove('disabled');
            startBtns.classList.remove('disabled');
            playerVsPlayer2 = true;
        })
        againstComputerBtns.addEventListener('click',()=>{
            pick.textContent = "Chose Against Very Bad Bot";
            player2Name.textContent = "Very Bad Bot";
            playerVsComp();
            againstPlayerBtns.classList.add('disabled');
            againstComputerBtns.classList.add('disabled');
            againstContainer.remove();
            randomBtns.classList.remove('disabled');
            startBtns.classList.remove('disabled');
        })
    };
    againstWhoFunction();

    //random number generator to see which ship preset gets placed.
    const randomGenerator = () =>{
        return Math.floor(Math.random() * 4); 
    };

    //random ship locations
    const playerShipPosition = () => {
        randomBtns.addEventListener('click',()=>{
            let rndmNumb = randomGenerator();
            if (rndmNumb === 0){
                makePlayerShips();
                makeCompShips();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                randomBtns.remove();
                hidePlayerScreen();
            } else if (rndmNumb === 1){
                makePlayerShips2();
                makeCompShips2();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                randomBtns.remove();
                hidePlayerScreen();
            } else if (rndmNumb === 2){
                makePlayerShips3();
                makeCompShips3();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                randomBtns.remove();
                hidePlayerScreen();
            } else if (rndmNumb === 3){
                makePlayerShips4();
                makeCompShips4();
                startGame();
                disableRndmBtns(randomBtns);
                startInstruction();
                randomBtns.remove();
                hidePlayerScreen();
            }
        })
    };
    playerShipPosition(randomGenerator());

    //reset button
    const resetButton = () => {
        resetBtns.addEventListener('click',()=>{
            console.log('refreshed');
            window.location.reload();
        })
    };
    resetButton();

    //pause everything after game ends.
    const pauseBoard = () => {
        ready = false;
        playerBoard.classList.add('disabled');
        computerBoard.classList.add('disabled');
        startBtns.classList.add('disabled');
        playerTurnText.textContent = "";
    };

    //shows text press start in status box.
    const startInstruction = () =>{
        const pressStartText = document.querySelector('.press-start');
        pressStartText.textContent = "Press Start Button";
    };

    //remove instruction on game start
    const hideInstruction = (instructions) =>{
        instructions.forEach((instruction)=>{
            instruction.style.visibility = "hidden";
        })
    };

    //disable anything function
    const disableRndmBtns = (randomBtns) => {
        randomBtns.classList.add('disabled');
    };

    //hide player ships if its player vs player 2
    const hidePlayerScreen = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        if(playerVsPlayer2){
            for (let i = 0; i < playerDivs.length; i++){
                playerDivs[i].style.backgroundColor = "";
            }
        } 
    };

    //shows win or lose text.
    const winOrLostText = (str, color) =>{
        const winOrLoseText = document.querySelector('.win-lost');
        winOrLoseText.style.color = color;
        winOrLoseText.textContent = str;
    };

    //creates log of the game.
    const logLists = (str) => {
        const logContainer = document.querySelector('.log-list');
        const logs = document.createElement('p');
        logs.setAttribute('class', 'logLists');
        logContainer.appendChild(logs);
        logs.textContent = str;
    };

    //bubble animation function
    const wallAnimationFunction = () => {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const WIDTH = document.documentElement.clientWidth;
        const HEIGHT = document.documentElement.clientHeight;
        
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        
        function random(number) {
            return Math.floor(Math.random()*number);
        }
        
        function draw() {
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            for (let i = 0; i < 25; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(0,0,253,0.1)';
            ctx.arc(random(WIDTH), random(HEIGHT), random(25), 0, 2 * Math.PI);
            ctx.fill();
            }
        }
        return{draw};
    }
    
    const bodyAnimation = () => {
        container.addEventListener('click',wallAnimationFunction().draw);
    }
    bodyAnimation();

////////////////////////
////MAKE PLAYER SHIP////
////////////////////////
//make player ships 1
    const makePlayerShips = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
            //make huge ship 1
            playerDivs[2].textContent = userList[0].marker;
            playerDivs[12].textContent = userList[0].marker;
            playerDivs[22].textContent = userList[0].marker;
            playerDivs[32].textContent = userList[0].marker;
            playerDivs[42].textContent = userList[0].marker;
            //make medium ship 1
            playerDivs[58].textContent = userList[0].marker;
            playerDivs[57].textContent = userList[0].marker;
            playerDivs[56].textContent = userList[0].marker;
            playerDivs[55].textContent = userList[0].marker;
            //make small ship 1
            playerDivs[96].textContent = userList[0].marker;
            playerDivs[86].textContent = userList[0].marker;
            playerDivs[76].textContent = userList[0].marker;
            //make small ship 1 again
            playerDivs[80].textContent = userList[0].marker;
            playerDivs[81].textContent = userList[0].marker;
            playerDivs[82].textContent = userList[0].marker;
            //make tiny ship 1
            playerDivs[25].textContent = userList[0].marker;
            playerDivs[26].textContent = userList[0].marker;
            //make tiny ship 1 again
            playerDivs[38].textContent = userList[0].marker;
            playerDivs[39].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray";
            }
        }
    };

    //make 2nd option player ships
    const makePlayerShips2 = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        // console.log(playerDivs)
        for (let i = 0; i < playerDivs.length;i++){
            //make huge ship 2
            playerDivs[17].textContent = userList[0].marker;
            playerDivs[27].textContent = userList[0].marker;
            playerDivs[37].textContent = userList[0].marker;
            playerDivs[47].textContent = userList[0].marker;
            playerDivs[57].textContent = userList[0].marker;
            //make big ship 2
            playerDivs[99].textContent = userList[0].marker;
            playerDivs[89].textContent = userList[0].marker;
            playerDivs[79].textContent = userList[0].marker;
            playerDivs[69].textContent = userList[0].marker;
            //make big ship 2
            playerDivs[12].textContent = userList[0].marker;
            playerDivs[13].textContent = userList[0].marker;
            playerDivs[14].textContent = userList[0].marker;
            //make small ship 2
            playerDivs[73].textContent = userList[0].marker;
            playerDivs[74].textContent = userList[0].marker;
            playerDivs[75].textContent = userList[0].marker;
            //make tiny ship 2
            playerDivs[52].textContent = userList[0].marker;
            playerDivs[53].textContent = userList[0].marker;
             //make tiny ship 1 again
            playerDivs[40].textContent = userList[0].marker;
            playerDivs[50].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray";
            }
        }
    };

    //make 3rd option player ships
    const makePlayerShips3 = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            //make huge ship 3
            playerDivs[73].textContent = userList[0].marker;
            playerDivs[74].textContent = userList[0].marker;
            playerDivs[75].textContent = userList[0].marker;
            playerDivs[76].textContent = userList[0].marker;
            playerDivs[77].textContent = userList[0].marker;
            //make medium ship 3
            playerDivs[15].textContent = userList[0].marker;
            playerDivs[16].textContent = userList[0].marker;
            playerDivs[17].textContent = userList[0].marker;
            playerDivs[18].textContent = userList[0].marker;
            //make small sihp 3
            playerDivs[20].textContent = userList[0].marker;
            playerDivs[21].textContent = userList[0].marker;
            playerDivs[22].textContent = userList[0].marker;
            //make small ship 3 again
            playerDivs[71].textContent = userList[0].marker;
            playerDivs[61].textContent = userList[0].marker;
            playerDivs[51].textContent = userList[0].marker;
            //make tiny ship 3
            playerDivs[46].textContent = userList[0].marker;
            playerDivs[47].textContent = userList[0].marker;
            //make tiny ship 3 again
            playerDivs[95].textContent = userList[0].marker;
            playerDivs[96].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray";
            }
        }
    };

    //make 4th option player ships
    const makePlayerShips4 = () => {
        const playerDivs = document.querySelectorAll('.player-grid');
        for (let i = 0; i < playerDivs.length;i++){
            //make huge ship 3
            playerDivs[65].textContent = userList[0].marker;
            playerDivs[66].textContent = userList[0].marker;
            playerDivs[67].textContent = userList[0].marker;
            playerDivs[68].textContent = userList[0].marker;
            playerDivs[69].textContent = userList[0].marker;
            //make medium ship 3
            playerDivs[10].textContent = userList[0].marker;
            playerDivs[20].textContent = userList[0].marker;
            playerDivs[30].textContent = userList[0].marker;
            playerDivs[40].textContent = userList[0].marker;
            //make small sihp 3
            playerDivs[51].textContent = userList[0].marker;
            playerDivs[52].textContent = userList[0].marker;
            playerDivs[53].textContent = userList[0].marker;
            //make small ship 3 again
            playerDivs[15].textContent = userList[0].marker;
            playerDivs[16].textContent = userList[0].marker;
            playerDivs[17].textContent = userList[0].marker;
            //make tiny ship 3
            playerDivs[22].textContent = userList[0].marker;
            playerDivs[32].textContent = userList[0].marker;
            //make tiny ship 3 again
            playerDivs[90].textContent = userList[0].marker;
            playerDivs[91].textContent = userList[0].marker;
            if (playerDivs[i].textContent === userList[0].marker){
                playerDivs[i].style.backgroundColor = "gray";
            }
        }
    };

    ////////////////////////
    ////MAKE ENEMY SHIP////
    ////////////////////////
    //make enemy ships
    const makeCompShips = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            //make huge ship 1
            computerDivs[1].textContent = userList[1].marker;
            computerDivs[2].textContent = userList[1].marker;
            computerDivs[3].textContent = userList[1].marker;
            computerDivs[4].textContent = userList[1].marker;
            computerDivs[5].textContent = userList[1].marker;
            //make medium ship 1
            computerDivs[10].textContent = userList[1].marker;
            computerDivs[20].textContent = userList[1].marker;
            computerDivs[30].textContent = userList[1].marker;
            computerDivs[40].textContent = userList[1].marker;
            //make big ship 1
            computerDivs[55].textContent = userList[1].marker;
            computerDivs[56].textContent = userList[1].marker;
            computerDivs[57].textContent = userList[1].marker;
            //make big ship 1 again
            computerDivs[70].textContent = userList[1].marker;
            computerDivs[71].textContent = userList[1].marker;
            computerDivs[72].textContent = userList[1].marker;
            //make tiny ship 1
            computerDivs[78].textContent = userList[1].marker;
            computerDivs[79].textContent = userList[1].marker;
            // make tiny ship 1 again
            computerDivs[18].textContent = userList[1].marker;
            computerDivs[28].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                //hide computer ship so player doesnt know where it is
                computerDivs[i].style.backgroundColor = ""
            }
        }
    };

//make enemyship 2
    const makeCompShips2 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            //make huge ship 2
            computerDivs[15].textContent = userList[1].marker;
            computerDivs[25].textContent = userList[1].marker;
            computerDivs[35].textContent = userList[1].marker;
            computerDivs[45].textContent = userList[1].marker;
            computerDivs[55].textContent = userList[1].marker;
            //make medium ship 2
            computerDivs[31].textContent = userList[1].marker;
            computerDivs[41].textContent = userList[1].marker;
            computerDivs[51].textContent = userList[1].marker;
            computerDivs[61].textContent = userList[1].marker;
            //make big ship 2
            computerDivs[75].textContent = userList[1].marker;
            computerDivs[76].textContent = userList[1].marker;
            computerDivs[77].textContent = userList[1].marker;
            //make big ship 2 again
            computerDivs[80].textContent = userList[1].marker;
            computerDivs[81].textContent = userList[1].marker;
            computerDivs[82].textContent = userList[1].marker;
            //make tiny ship 2
            computerDivs[8].textContent = userList[1].marker;
            computerDivs[9].textContent = userList[1].marker;
            // make tiny ship 2 again
            computerDivs[94].textContent = userList[1].marker;
            computerDivs[95].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                //hide computer ship so player doesnt know where it is
                computerDivs[i].style.backgroundColor = "";
            }
        }
    };

//make enemyship 3
    const makeCompShips3 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            //make huge ship 3
            computerDivs[25].textContent = userList[1].marker;
            computerDivs[26].textContent = userList[1].marker;
            computerDivs[27].textContent = userList[1].marker;
            computerDivs[28].textContent = userList[1].marker;
            computerDivs[29].textContent = userList[1].marker;
            //make medium ship 3
            computerDivs[55].textContent = userList[1].marker;
            computerDivs[65].textContent = userList[1].marker;
            computerDivs[75].textContent = userList[1].marker;
            computerDivs[85].textContent = userList[1].marker;
            // make big ship 3
            computerDivs[41].textContent = userList[1].marker;
            computerDivs[42].textContent = userList[1].marker;
            computerDivs[43].textContent = userList[1].marker;
            // make big ship 3
            computerDivs[70].textContent = userList[1].marker;
            computerDivs[80].textContent = userList[1].marker;
            computerDivs[90].textContent = userList[1].marker;
            // make tiny ship 3
            computerDivs[1].textContent = userList[1].marker;
            computerDivs[2].textContent = userList[1].marker;
            // make tiny ship 3 again
            computerDivs[89].textContent = userList[1].marker;
            computerDivs[99].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                //hide computer ship so player doesnt know where it is
                computerDivs[i].style.backgroundColor = "";
            }
        }
    };

    //make enemyship 4
    const makeCompShips4 = () => {
        const computerDivs = document.querySelectorAll('.computer-grid');
        for (let i = 0; i < computerDivs.length;i++){
            //make huge ship 4
            computerDivs[15].textContent = userList[1].marker;
            computerDivs[25].textContent = userList[1].marker;
            computerDivs[35].textContent = userList[1].marker;
            computerDivs[45].textContent = userList[1].marker;
            computerDivs[55].textContent = userList[1].marker;
            //make medium ship 4
            computerDivs[95].textContent = userList[1].marker;
            computerDivs[96].textContent = userList[1].marker;
            computerDivs[97].textContent = userList[1].marker;
            computerDivs[98].textContent = userList[1].marker;
            // make big ship 4
            computerDivs[49].textContent = userList[1].marker;
            computerDivs[59].textContent = userList[1].marker;
            computerDivs[69].textContent = userList[1].marker;
            // make big ship 4
            computerDivs[27].textContent = userList[1].marker;
            computerDivs[28].textContent = userList[1].marker;
            computerDivs[29].textContent = userList[1].marker;
            // make tiny ship 4
            computerDivs[1].textContent = userList[1].marker;
            computerDivs[11].textContent = userList[1].marker;
            // make tiny ship 4 again
            computerDivs[62].textContent = userList[1].marker;
            computerDivs[72].textContent = userList[1].marker;
            if (computerDivs[i].textContent === userList[1].marker){
                //hide computer ship so player doesnt know where it is
                computerDivs[i].style.backgroundColor = "";
            }
        }
    };
    return{};
})();