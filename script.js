// 1. Computer picks randomly rock, paper or scissors
// 2. Computer stores it's pick, waits for player input
// 3. Player types in rock, paper, or scissors as his choice
// 4. Player input gets stored
// 5. Both AI and Player inputs are compared and stored to winner and loser
// 6. Write to paragraph: [winner-pick] beats [loser-pick], and You Won, or You Lost

let AIScore = 0;
let PlayerScore = 0;
const pickTable = ["rock", "paper", "scissors"];

function computerPick() {
    let rollPick = Math.floor(Math.random() * 3);
    //computerChoice = "" + pickTable[rollPick];
    console.log("Computer choice: "+pickTable[rollPick]);
    return "" + pickTable[rollPick];
}
function playerPick() {
    return prompt("Type in your pick!")
}

function playRound(playerInput, computerInput) {
    //for(let i = 0; i<= pickTable.length -1 ; i++){
        //if (pickTable[i] == document.querySelector("input").value){
           // playerInput = pickTable[i];
           // console.log("Player choice: "+playerInput);
        //}
    //}
    playerInput = playerPick().toLowerCase();
    console.log("Player choice: "+playerInput);
    computerInput = computerPick();
    // take player choice and computer choice, compare and return winner
    
    if (playerInput != "rock") {
        if (playerInput != "scissors") {
            if (playerInput != "paper"){
                console.log("Wrong input, type in rock, paper, or scissors");
            }
        }
        
    }
    if (playerInput==computerInput) {
        console.log("Draw!");
    }
    else if (playerInput=="rock" && computerInput=="paper") {
        console.log("You Lost This Round!");
        AIScore++;
    }
    else if (playerInput=="rock" && computerInput=="scissors") {
        console.log("You Won This Round!");
        PlayerScore++;
    }
    else if (playerInput=="paper" && computerInput=="scissors") {
        console.log("You Lost This Round!");
        AIScore++;
    }
    else if (playerInput=="paper" && computerInput=="rock") {
        console.log("You Won This Round!");
        PlayerScore++;
    }
    else if (playerInput=="scissors" && computerInput=="paper") {
        console.log("You Won This Round!");
        PlayerScore++;
    }
    else if (playerInput=="scissors" && computerInput=="rock") {
        console.log("You Lost This Round!");
        AIScore++;
    }
    console.log("Computer score: "+AIScore+" Player score: "+PlayerScore);
}
function resetScores() {
AIScore = 0;
PlayerScore = 0;
}
function playGame() {
    for (let i = 0; i <= 4; i++ ){
        playRound();
    }
    let winner;
    if (PlayerScore > AIScore) {
        winner = "YOU WON!";
    }
    else if (PlayerScore < AIScore) {
        winner = "YOU LOST!";
    }
    else if (PlayerScore == AIScore){
        winner = "ITS A DRAW!";
    }
    let writeWinnerHere = document.querySelector('p');
    writeWinnerHere.textContent = winner;
    resetScores();
}
