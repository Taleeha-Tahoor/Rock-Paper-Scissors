let uScore = 0;
let cScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        uScore++;
        userScore.innerText = uScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        cScore++;
        compScore.innerText = cScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const play = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText = 'Game is draw. Play again';
        msg.style.backgroundColor = '#082b31'; // Fixed color code
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        play(userChoice);
    })
});
