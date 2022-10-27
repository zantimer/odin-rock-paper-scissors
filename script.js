// 1. Computer picks randomly rock, paper or scissors
// 2. Computer stores it's pick, waits for player input
// 3. Player types in rock, paper, or scissors as his choice
// 4. Player input gets stored
// 5. Both AI and Player inputs are compared and stored to winner and loser
// 6. Write to paragraph: [winner-pick] beats [loser-pick], and You Won, or You Lost

let computerChoice;
let playerChoice;
const pickTable = ["rock", "paper", "scissors"];

function computerPick() {
    let rollPick = Math.floor(Math.random() * 3);
    //computerChoice = "" + pickTable[rollPick];
    console.log("Computer choice: "+pickTable[rollPick]);
    return "" + pickTable[rollPick];
}
function playerPick() {
    
}
function playRound(playerInput, computerInput) {
    for(let i = 0; i<= pickTable.length -1 ; i++){
        if (pickTable[i] == document.querySelector("input").value){
            playerInput = pickTable[i];
            console.log("Player choice: "+playerInput);
        }
    }
    
    computerInput = computerPick();
    // take player choice and computer choice, compare and return winner
    let winner;
    if (playerInput==computerInput) {
        console.log("works");
    }
}
