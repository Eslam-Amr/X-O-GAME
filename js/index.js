function pcWin() {
    let audio = new Audio("test.mp3");
    audio.play();
}
function winnerSound() {
    let audio = new Audio("1.mp3");
    audio.play();
}
function beatPc() {
    let audio = new Audio("2.mp3");
    audio.play();
}
let l = '';
function single(i) {
    l = i;
    color()
}
function color() {
    console.log(l);
    if (l === 'two') {
        document.getElementById('two').style.backgroundColor = '#4499e3';
        document.getElementById('one').style.backgroundColor = '#44BEE3';
    }
    else if (l === 'one') {
        document.getElementById('one').style.backgroundColor = '#4499e3';
        document.getElementById('two').style.backgroundColor = '#44BEE3';
    }
}
let turn = 'x';
let counter = 0;
let x = [0, 0, 0, 0, 0, 0, 0, 0, 0], o = [0, 0, 0, 0, 0, 0, 0, 0, 0], id;
let h = document.getElementById('head');
function Boox(i) {
    if (l === 'two') {
        id = Number(i) - 1;
        let element = document.getElementById(i);
        doTurn('x', x, element);
        if (checkWinner(x)){
            setWinner('x');
winnerSound();
        }
        doTurn('o', o, element);
        if (checkWinner(o)){
            winnerSound();
            setWinner('o');
        }
        checkDraw();
    }
    else if (l === 'one') {
        id = Number(i) - 1;
        let element = document.getElementById(i);
        doTurn('x', x, element);
        if (checkWinner(x)) {
            beatPc();
            setWinner('x');
        } else {
            if (counter <= 8) {
                doPcTurn()
            }
            setTimeout(() => {
                if (checkWinner(o)) {
                    setWinner('o');
                    pcWin();
                }

                checkDrawForSinglePlayer();
            }, 600);

        }
        checkDrawForSinglePlayer();
    }
}
function checkWinner(x) {
    if ((x[0] == 1 && x[1] == 1 && x[2] == 1) ||
        (x[3] == 1 && x[4] == 1 && x[5] == 1) ||
        (x[6] == 1 && x[7] == 1 && x[8] == 1) ||
        (x[0] == 1 && x[3] == 1 && x[6] == 1) ||
        (x[1] == 1 && x[4] == 1 && x[7] == 1) ||
        (x[2] == 1 && x[5] == 1 && x[8] == 1) ||
        (x[0] == 1 && x[4] == 1 && x[8] == 1) ||
        (x[2] == 1 && x[4] == 1 && x[6] == 1))
        return true;
    else
        return false;
}
function doTurn(player, playerArray, element) {
    if (turn === `${player}` && element.innerHTML == '') {
        element.innerHTML = `<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">${player}</h2>`;
        h.innerHTML = `<h1 class="text-center text-uppercase ">${player == 'x' ? 'o' : 'x'} turn</h1>`;
        turn = `${player == 'x' ? 'o' : 'x'}`;
        playerArray[id] = 1;
        counter++;
    }
}
function setWinner(player) {
    h.innerHTML = `<h1 class="text-center text-uppercase ">${player} WINNER</h1>`;
    rest();
}
function checkDraw() {
    
    if (counter == 9) {
        pcWin();
        h.innerHTML = '<h1 class="text-center text-uppercase ">DRAW</h1>';
        rest();
    }
}
function rest() {
    counter = 0;
    setTimeout(() => {
        h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
        x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = 1; i <= 9; i++) {
            document.getElementById(`${i}`).innerHTML = '';
        }
    }, 3000)
}
function checkDrawForSinglePlayer() {
    checkDraw();
    turn = 'x';
}
function doPcTurn() {
    var counter2 = 0;
    while (counter2 < 10000) {
        counter2++
        console.log(counter2);
        var a = Math.floor((Math.random() * 8) + 1)
        var id = Number(a) - 1;
        console.log(a);
        var element = document.getElementById(a);
        if (element.innerHTML == '') {
            setTimeout(() => {
                element.innerHTML = '<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">o</h2>';
                h.innerHTML = '<h1 class="text-center text-uppercase ">X turn</h1>';
                o[id] = 1;
                turn = 'x';
                counter++;
            }, 500);
            break;
        }
    }
}
