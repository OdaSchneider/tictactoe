let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player2').classList.remove('playerInactive');
            document.getElementById('player1').classList.add('playerInactive');
        }

        fields[id] = currentShape;
        draw();
        checkWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');
        } if (fields[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');
        }
    }
}


function checkWin() {
    let winner;

    //horizontal
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line3').style.transform = 'scaleX(1)';
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
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line2').style.transform = 'scaleX(1)';
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
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line1').style.transform = 'scaleX(1)';
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

    //vertical
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
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
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
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
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleX(1)';
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

    //diagonal
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)';
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
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1)';
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

    if(winner){
        gameOver = true;
    }

}