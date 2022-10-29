// 1. Computer picks randomly rock, paper or scissors
// 2. Computer stores it's pick, waits for player input
// 3. Player types in rock, paper, or scissors as his choice
// 4. Player input gets stored
// 5. Both AI and Player inputs are compared and stored to winner and loser
// 6. Write to paragraph: [winner-pick] beats [loser-pick], and You Won, or You Lost

let AIScore = 0;
let PlayerScore = 0;
let winner = "";
let para = document.createElement('p');

const pickTable = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('.playBtn');
const resultDiv = document.querySelector('div');
resultDiv.appendChild(para);

buttons.forEach(button => {
    button.addEventListener('click', 
    playRound);
});

function writeResult (msg) {
    para.textContent += "\n"+msg;
}

function computerPick() {
    let rollPick = Math.floor(Math.random() * 3);
    //computerChoice = "" + pickTable[rollPick];
    writeResult("Computer choice: "+pickTable[rollPick]);
    return "" + pickTable[rollPick];
}

function playRound(playerInput, computerInput) {
    //for(let i = 0; i<= pickTable.length -1 ; i++){
        //if (pickTable[i] == document.querySelector("input").value){
           // playerInput = pickTable[i];
           // writeResult("Player choice: "+playerInput);
        //}
    //}
    para.textContent = "";
    playerInput = this.textContent;
    writeResult("Player choice: "+playerInput);
    computerInput = computerPick();
    // take player choice and computer choice, compare and return winner
    
    if (playerInput != "rock") {
        if (playerInput != "scissors") {
            if (playerInput != "paper"){
                writeResult("Wrong input, type in rock, paper, or scissors");
            }
        }
    }
    if (AIScore == 5)
    {
        winner = "AI"
        writeResult("YER LOST, reset if you want to go again");
    }
    else if (PlayerScore == 5)
    {
        winner = "Player"
        writeResult("YA WON, reset if you want to go again");
    }
    if (winner == "")
    {
    if (playerInput==computerInput) {
        writeResult("Draw!");
        
    }
    else if (playerInput=="rock" && computerInput=="paper") {
        writeResult("You Lost This Round!");
        AIScore++;
        
    }
    else if (playerInput=="rock" && computerInput=="scissors") {
        writeResult("You Won This Round!");
        PlayerScore++;
        
    }
    else if (playerInput=="paper" && computerInput=="scissors") {
        writeResult("You Lost This Round!");
        AIScore++;
        
    }
    else if (playerInput=="paper" && computerInput=="rock") {
        writeResult("You Won This Round!");
        PlayerScore++;
        
    }
    else if (playerInput=="scissors" && computerInput=="paper") {
        writeResult("You Won This Round!");
        PlayerScore++;
        
    }
    else if (playerInput=="scissors" && computerInput=="rock") {
        writeResult("You Lost This Round!");
        AIScore++;
        
    }
    writeResult("Computer score: "+AIScore+" Player score: "+PlayerScore);
    }
}
function resetScores() {
AIScore = 0;
PlayerScore = 0;
}

