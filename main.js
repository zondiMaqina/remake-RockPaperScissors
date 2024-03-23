// player press start game button to play
// window appears asking for how many rounds
// answer appears on rounds node
// player clicks either:
// rock | paper | scissors
// when player clicks rock:
//      if computor chooses rock its a draw
//      if computor chooses paper player wins and gains point
//      if computor chooses scissors computor loses
// when player clicks paper:
//      if computor chooses rock player wins
//      if computor chooses paper its a draw
//      if computor chooses scissors computor wins and gains point
// when player clicks scissors:
//      if computor chooses rock computor wins and gains point.
//      if computor chooses paper player wins and gains point
//      if computor chooses scissors it is a tie
// Game ends when rounds hit 0
// Player can Retry when rounds hit zero

// Storing nodes in variables

let startGame =
document.getElementById("startGame");

let endGame =
document.getElementById("endGame");

let rounds =
document.getElementById("round");

let statement =
document.querySelector("#statement");

let rock =
document.getElementById("rock");

let paper =
document.getElementById("paper");

let scissors = 
document.getElementById("scissors");

// parent node
let resultOfComputor = 
document.querySelector(".choice");


// child nodes declarations and Computor choice

// child nodes declarations
let compRock =
document.createElement("img");
compRock.src = "./images/rock.svg";

let compPaper =
document.createElement("img") ;
compPaper.src = "./images/paper.svg";

let compScissors =
document.createElement("img");
compScissors.src = "./images/scissors.svg"

// Computor choice;
let computorMoves = [compRock, compScissors, compPaper];

// Statements
let yourRockWins = "Rock beats Scissors...You win";
let yourPaperWins = "Paper beats Rock...You Win";
let yourScissorsWins = "Scissors beats Paper...You Win";

let yourRockLose = "Your Rock is beaten by Paper...try again";
let yourPaperLose = "Your Paper is beaten by Scissors...try again";
let yourScissorsLose = "Your Scissors is beaten by Rock...try again"

let evenTie = "It is a Tie..Try Again";

let compMove;
let gameStarted = false;
let gameEnded = false;

// Game numbers
let user_points = 0;
let computorPoints = 0;
let roundsAmount;


// showing points on screen
let compPoints =
document.querySelector(".compPoints");

let userPoints =
document.querySelector(".userPoints");


// starting Game
startGame.addEventListener("click", function(){

    gameStarted = true;

    // assign DOM text
    userPoints.textContent = user_points;
    compPoints.textContent = computorPoints;


    roundsAmount = window.prompt("How many rounds would you like to play?")
    if (gameStarted){
        rounds.textContent = Number(roundsAmount);
    } 
})


// COmputorMove function
function randomComputorMove(){
    // random Computor Moves
    compMove = computorMoves[Math.floor(Math.random() * computorMoves.length)];

    if (resultOfComputor.hasChildNodes() == true){
        resultOfComputor.innerHTML = "";
    }

// computor final moves
    if (compMove == computorMoves[0]){
        computorMoves[0].style.width = "140px";
        computorMoves[0].style.width = "200px";
      return resultOfComputor.appendChild(computorMoves[0]);       
    }else if (compMove == computorMoves[1]){
        computorMoves[1].style.width = "140px";
        computorMoves[1].style.width = "200px";
        
       return resultOfComputor.appendChild(computorMoves[1]);
    }else if (compMove == computorMoves[2]){
        computorMoves[2].style.width = "140px";
        computorMoves[2].style.width = "200px";

       return resultOfComputor.appendChild(computorMoves[2]);

    }

}

// Player Moves setting Computor moves
rock.addEventListener("click", function(){

    if (rounds.textContent == "0"){
        resultOfComputor.innerHTML = "";
        gameStarted = false;
        statement.textContent = "Game Over";
        gameEnded = true;

        if (user_points == computorPoints){
            document.querySelector("#winner").textContent = "Nah Yall Both Lost"
        }
        else if (user_points > computorPoints){
            document.querySelector("#winner").textContent = "You WON THE GAME !!!";
            compPoints.textContent = "";
            userPoints.textContent = "";
        }else if (computorPoints > user_points){
            document.querySelector("#winner").textContent = "DEFINITELY NOT YOU BROSIKE !!!";
            compPoints.textContent = "";
            userPoints.textContent = "";
        }

        user_points = 0;
        computorPoints = 0;
        userPoints.textContent = 0;
        compPoints.textContent = 0;

    }

    if (gameStarted){
        randomComputorMove();
        if (rounds.textContent !== "0"){
            rounds.textContent -= 1;
        }
    
        if (compMove == computorMoves[0]){
            statement.textContent = evenTie;
    
        }else if (compMove == computorMoves[1]){
            statement.textContent = yourRockWins;
            user_points ++;
            userPoints.textContent = user_points;
        }else if (compMove == computorMoves[2]){
            statement.textContent = yourRockLose;
            computorPoints++;
            compPoints.textContent = computorPoints;
        } 
    }
})

paper.addEventListener("click", function(){

        if (rounds.textContent == "0"){
            resultOfComputor.innerHTML = "";
            gameStarted = false;
            statement.textContent = "Game Over";
            gameEnded = true;
            
            if (user_points == computorPoints){
                document.querySelector("#winner").textContent = "Nah Yall Both Lost"
            }
            else if (user_points > computorPoints){
                document.querySelector("#winner").textContent = "You WON THE GAME !!!";
                compPoints.textContent = "";
                userPoints.textContent = "";
            }else if (computorPoints > user_points){
                document.querySelector("#winner").textContent = "DEFINITELY NOT YOU BROSIKE !!!";
                compPoints.textContent = "";
                userPoints.textContent = "";
            }    

            user_points = 0;
            computorPoints = 0;    
            userPoints.textContent = 0;
            compPoints.textContent = 0;
        }


    if (gameStarted){
        randomComputorMove();
        if (rounds.textContent !== "0"){
            rounds.textContent -= 1;
        }
    
        if (compMove == computorMoves[0]){
            statement.textContent = yourPaperWins;
            user_points ++;
            userPoints.textContent = user_points;
    
        }else if (compMove == computorMoves[1]){
            statement.textContent = yourPaperLose;
            computorPoints ++;
            compPoints.textContent = computorPoints;
        }else if (compMove == computorMoves[2]){
            statement.textContent = evenTie;
        }  
        
    }
})

scissors.addEventListener("click", function(){

    if (rounds.textContent == "0"){
        resultOfComputor.innerHTML = "";
        gameStarted = false;
        statement.textContent = "Game Over";
        gameEnded = true;

        if (user_points == computorPoints){
            document.querySelector("#winner").textContent = "Nah Yall Both Lost"
        }
        else if (user_points > computorPoints){
            document.querySelector("#winner").textContent = "You WON THE GAME !!!";
            compPoints.textContent = "";
            userPoints.textContent = "";
        }else if (computorPoints > user_points){
            document.querySelector("#winner").textContent = "DEFINITELY NOT YOU BROSIKE !!!";
            compPoints.textContent = "";
            userPoints.textContent = "";
        }
        user_points = 0;
        computorPoints = 0;
        userPoints.textContent = 0;
        compPoints.textContent = 0;

    }

    if (gameStarted){
        randomComputorMove();
        if (rounds.textContent !== "0"){
            rounds.textContent -= 1;
        }
    
        if (compMove == computorMoves[0]){
            statement.textContent = yourScissorsLose;
            computorPoints ++;
            compPoints.textContent = computorPoints;
    
        }else if (compMove == computorMoves[1]){
            statement.textContent = evenTie;
    
        }else if (compMove == computorMoves[2]){
            statement.textContent = yourScissorsWins;
            user_points ++;
            userPoints.textContent = user_points;

        }    

    }
})

endGame.addEventListener("click", function(){
    if (gameStarted == false && gameEnded == true){
        roundsAmount = window.prompt("How many rounds would you like to play?")
        rounds.textContent = Number(roundsAmount);
        statement.textContent = "Game On!!!";
        gameStarted = true;
}

})