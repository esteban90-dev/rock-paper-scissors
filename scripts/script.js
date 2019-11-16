function computerSelection(){                               //returns 'rock', 'paper', or 'scissors' randomly.
    let compVal;

    compVal = Math.floor(Math.random()*3) + 1;
    
    switch(compVal){
        case 1:
            console.log('Computer chose Rock.');
            break;

        case 2:
            console.log('Computer chose Paper');  
            break;

        default:
            console.log('Computer chose Scissors');  
    }

    return compVal;

}
            
            
            
function playRound(p1,p2){

    let playerIn = p1;
    let computerIn = p2;

    if ( (playerIn == 'Rock') && (computerIn == 2) ){
        console.log('Computer wins the round - Paper beats Rock');
        return 1;
    } 

    else if ( (playerIn == 'Rock') && (computerIn == 3) ){
        console.log('Player wins the round - Rock beats Scissors');
        return 2;
    }

    else if ( (playerIn == 'Paper') && (computerIn == 1) ){
        console.log('Player wins the round - Paper beats Rock');
        return 3;
    } 

    else if ( (playerIn == 'Paper') && (computerIn == 3) ){
        console.log('Computer wins the round - Scissors beats Paper');
        return 4;
    } 

    else if ( (playerIn == 'Scissors') && (computerIn == 1) ){
        console.log('Computer wins the round - Rock beats Scissors');
        return 5;
    } 

    else if ( (playerIn == 'Scissors') && (computerIn == 2) ){
        console.log('Player wins the round - Scissors beat Paper');
        return 6;
    }

    else if ( (playerIn == 'Rock') && (computerIn == 1)  ){
        console.log('Tie - both chose Rock');
        return 7;
    }

    else if ( (playerIn == 'Paper') && (computerIn == 2)  ){
        console.log('Tie - both chose Paper');
        return 8;
    }

    else {
        console.log('Tie - both chose Scissors');
    }
    

}


                        
//Add event listeners to the rock/paper/scissors buttons
let x;
let playerPoints = 0;
let computerPoints = 0;
let result;
let btn = document.querySelectorAll('button'); 
for(x = 0; x < btn.length; x++){
    btn[x].addEventListener('click',clickBtn);
}

function clickBtn(e){
    let playerIn = e.target.firstChild.data;
    let computerIn = computerSelection();
    let playerScore;
    let computerScore;


    result = playRound(playerIn,computerIn);

    if (result == 1){
        document.querySelector(".player-select").innerText = 'rock';
        document.querySelector(".computer-select").innerText = 'paper';
        document.querySelector(".result").innerText = 'computer wins round';
        computerPoints++;
    } 

    else if (result == 2){
        document.querySelector(".player-select").innerText = 'rock';
        document.querySelector(".computer-select").innerText = 'scissors';
        document.querySelector(".result").innerText = 'player wins round';
        playerPoints++;
    }

    else if (result == 3){
        document.querySelector(".player-select").innerText = 'paper';
        document.querySelector(".computer-select").innerText = 'rock';
        document.querySelector(".result").innerText = 'player wins round';
        playerPoints++;
    } 

    else if (result == 4){
        document.querySelector(".player-select").innerText = 'paper';
        document.querySelector(".computer-select").innerText = 'scissors';
        document.querySelector(".result").innerText = 'computer wins round';
        computerPoints++;
    } 

    else if (result == 5){
        document.querySelector(".player-select").innerText = 'scissors';
        document.querySelector(".computer-select").innerText = 'rock';
        document.querySelector(".result").innerText = 'computer wins round';
        computerPoints++;
    } 

    else if (result == 6){
        document.querySelector(".player-select").innerText = 'scissors';
        document.querySelector(".computer-select").innerText = 'paper';
        document.querySelector(".result").innerText = 'player wins round';
        playerPoints++;
    }

    else if (result == 7){
        document.querySelector(".player-select").innerText = 'rock';
        document.querySelector(".computer-select").innerText = 'rock';
        document.querySelector(".result").innerText = 'tie';
    }

    else if (result == 8){
        document.querySelector(".player-select").innerText = 'paper';
        document.querySelector(".computer-select").innerText = 'paper';
        document.querySelector(".result").innerText = 'tie';
    }

    else {
        document.querySelector(".player-select").innerText = 'scissors';
        document.querySelector(".computer-select").innerText = 'scissors';
        document.querySelector(".result").innerText = 'tie';
    }

    if(playerPoints == 5){
        playerPoints = 0;
        computerPoints = 0;
        document.querySelector(".player-select").innerText = '---';
        document.querySelector(".computer-select").innerText = '---';
        document.querySelector(".result").innerText = '---';
        alert('Player wins the game!');
    }

    else if(computerPoints == 5){
        playerPoints = 0;
        computerPoints = 0;
        document.querySelector(".player-select").innerText = '---';
        document.querySelector(".computer-select").innerText = '---';
        document.querySelector(".result").innerText = '---';
        alert('Computer wins the game!');
    }

    computerScore = document.querySelector(".computer-score");
    computerScore.innerText = computerPoints;

    playerScore = document.querySelector(".player-score");
    playerScore.innerText = playerPoints;

    


}
