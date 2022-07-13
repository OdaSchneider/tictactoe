let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        }

        fields[id] = currentShape;
        draw();
        checkWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('field' + i).innerHTML = "<img src=\"./img/circle.png\">";
        } if (fields[i] == 'cross') {
            document.getElementById('field' + i).innerHTML = "<img src=\"./img/cross.png\">";
        }
    }
}


function checkWin() {
    let winner;

    checkHorizontal(winner);
    checkVertical(winner);
    checkDiagonal(winner);
}


function checkHorizontal(winner){
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        animationWinnerOption1();
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        animationWinnerOption2();
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        animationWinnerOption3();
    }
    checkforContinue(winner);
    returnResult(winner);
}


function checkVertical(winner){
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        animationWinnerOption4();
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        animationWinnerOption5();
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        animationWinnerOption6();
    }
    checkforContinue(winner);
    returnResult(winner);
}


function checkDiagonal(winner){
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        animationWinnerOption7();
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        animationWinnerOption8();
    }
    checkforContinue(winner);
    returnResult(winner);
}


function checkforContinue(winner){
    if(!winner && fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8]){
        returnResultEqual();
    }
}


function returnResultEqual(){
    gameOver = true;
    document.getElementById('dialog').innerHTML= `<b>GAME OVER</b><br><span>There is no winner in this round`;
    animateEndScreen();
}


function returnResult(winner){
    if (winner) {
        gameOver = true;
        determineWinner(winner);
    }
}


function determineWinner(winner){
    let winnerName;

    if(winner == 'circle'){
        winnerName = 'Player 1';
    }else{
        winnerName = 'Player 2';
    }
    document.getElementById('dialog').innerHTML= `<b>Good Game</b><br><span>The winner is ${winnerName}`;
    animateEndScreen();
}


function animateEndScreen(){
    document.getElementById('dialog').classList.remove('d-none');
    document.getElementById('player1').classList.add('playerInactive');
    document.getElementById('player2').classList.add('playerInactive');
}


function restart() {
    resetElements();

    for (let i = 0; i < 9; i++) {
        document.getElementById('field' + i).innerHTML = '';
        document.getElementById('cell' + i).style.backgroundColor = 'unset';
    }
    for (let i = 0; i < 8; i++) {
        document.getElementById('line' + i).style.transform = 'scaleX(0)';
    }
}


function resetElements(){
    fields = [];
    gameOver = false;
    currentShape = 'cross';
    document.getElementById('dialog').classList.add('d-none');
    document.getElementById('player1').classList.remove('playerInactive');
}


function animationWinnerOption1() {
    document.getElementById('line2').style.transform = 'scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
}


function animationWinnerOption2() {
    document.getElementById('line1').style.transform = 'scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
}


function animationWinnerOption3() {
    document.getElementById('line0').style.transform = 'scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
}


function animationWinnerOption4() {
    document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
}


function animationWinnerOption5() {
    document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
}


function animationWinnerOption6() {
    document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
}


function animationWinnerOption7() {
    document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
}


function animationWinnerOption8(){
    document.getElementById('line7').style.transform = 'rotate(-45deg) scaleX(1)';
    document.getElementById('cell0').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell1').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell2').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell3').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell4').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell5').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell6').style.backgroundColor = 'rgba(0, 255, 0, 0.1)'
    document.getElementById('cell7').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
    document.getElementById('cell8').style.backgroundColor = 'rgba(255, 0, 0, 0.1)'
}