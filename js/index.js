// console.log("hello");
// while(1){
// var a=Math.floor((Math.random()*9)+1)
// console.log(a);
// }

function playy() {
    let audio = new Audio("../audio/شربتها يا كروديا.mp3");
    audio.play();
}
function playyy() {
    let audio = new Audio("../audio/y2mate.is - انت عبيط هل انت عبيط-n1IGjICMThc-192k-1691064544.mp3");
    audio.play();
}
function playyyy() {
    let audio = new Audio("../audio/_from165.911823s_to168.244754s.mp3");
    audio.play();
}
// playy();
let l = '';
function single(i) {
    // console.log(l)
    l = i;
    // console.log(l)
    color()
    // return l;
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

let t = 'x';
let tt = 0;
let x = [0, 0, 0, 0, 0, 0, 0, 0, 0], o = [0, 0, 0, 0, 0, 0, 0, 0, 0], id;
let h = document.getElementById('head');
function Boox(i) {
    if (l === 'two') {
        id = Number(i) - 1;
        let element = document.getElementById(i);

        if (t === 'x' && element.innerHTML == '') {
            element.innerHTML = '<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">x</h2>';
            h.innerHTML = '<h1 class="text-center text-uppercase ">O turn</h1>';
            t = 'o';
            x[id] = 1;
            tt++;
        }
        if (t === 'o' && element.innerHTML == '') {
            element.innerHTML = '<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">o</h2>';
            h.innerHTML = '<h1 class="text-center text-uppercase ">X turn</h1>';
            o[id] = 1;
            t = 'x';
            tt++;
        }
        if (
            (x[0] == 1 && x[1] == 1 && x[2] == 1) ||
            (x[3] == 1 && x[4] == 1 && x[5] == 1) ||
            (x[6] == 1 && x[7] == 1 && x[8] == 1) ||
            (x[0] == 1 && x[3] == 1 && x[6] == 1) ||
            (x[1] == 1 && x[4] == 1 && x[7] == 1) ||
            (x[2] == 1 && x[5] == 1 && x[8] == 1) ||
            (x[0] == 1 && x[4] == 1 && x[8] == 1) ||
            (x[2] == 1 && x[4] == 1 && x[6] == 1)) {
            tt = 0;
            h.innerHTML = '<h1 class="text-center text-uppercase ">X WINNER</h1>';
            playy();

            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }
        if (
            (o[0] == 1 && o[1] == 1 && o[2] == 1) ||
            (o[3] == 1 && o[4] == 1 && o[5] == 1) ||
            (o[6] == 1 && o[7] == 1 && o[8] == 1) ||
            (o[0] == 1 && o[3] == 1 && o[6] == 1) ||
            (o[1] == 1 && o[4] == 1 && o[7] == 1) ||
            (o[2] == 1 && o[5] == 1 && o[8] == 1) ||
            (o[0] == 1 && o[4] == 1 && o[8] == 1) ||
            (o[2] == 1 && o[4] == 1 && o[6] == 1)) {
            tt = 0;
            h.innerHTML = '<h1 class="text-center text-uppercase ">O WINNER</h1>';
            playy();

            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }
        if (tt == 9) {
            playyy();
            tt = 0;
            h.innerHTML = '<h1 class="text-center text-uppercase ">DRAW</h1>';
            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }


    }
    else if (l === 'one') {
        id = Number(i) - 1;
        let element = document.getElementById(i);

        if (t === 'x' && element.innerHTML == '') {
            element.innerHTML = '<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">x</h2>';
            h.innerHTML = '<h1 class="text-center text-uppercase ">O turn</h1>';
            t = 'o';
            x[id] = 1;
            tt++;
        }
        else if (t === 'o') {
            while (1) {

                var a = Math.floor((Math.random() * 9) + 1)
                id = Number(a) - 1;
                console.log(a);
                element = document.getElementById(a);
                // console.log(element);
                if (element.innerHTML == '') {

                    element.innerHTML = '<h2 class="text-center fw-bolder fa-3x mt-2 text-capitalize">o</h2>';
                    h.innerHTML = '<h1 class="text-center text-uppercase ">X turn</h1>';
                    o[id] = 1;
                    t = 'x';
                    tt++;
                    break;
                }
            }
            // else{
            //     var a = Math.floor((Math.random() * 9) + 1)
            //     console.log(a);
            //     element = document.getElementById(a);
            //     // console.log(element);

            // }
        }
        if (
            (x[0] == 1 && x[1] == 1 && x[2] == 1) ||
            (x[3] == 1 && x[4] == 1 && x[5] == 1) ||
            (x[6] == 1 && x[7] == 1 && x[8] == 1) ||
            (x[0] == 1 && x[3] == 1 && x[6] == 1) ||
            (x[1] == 1 && x[4] == 1 && x[7] == 1) ||
            (x[2] == 1 && x[5] == 1 && x[8] == 1) ||
            (x[0] == 1 && x[4] == 1 && x[8] == 1) ||
            (x[2] == 1 && x[4] == 1 && x[6] == 1)) {
            h.innerHTML = '<h1 class="text-center text-uppercase ">X WINNER</h1>';
            tt = 0;
            t = 'x';
            playyyy();
            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }
        if (
            (o[0] == 1 && o[1] == 1 && o[2] == 1) ||
            (o[3] == 1 && o[4] == 1 && o[5] == 1) ||
            (o[6] == 1 && o[7] == 1 && o[8] == 1) ||
            (o[0] == 1 && o[3] == 1 && o[6] == 1) ||
            (o[1] == 1 && o[4] == 1 && o[7] == 1) ||
            (o[2] == 1 && o[5] == 1 && o[8] == 1) ||
            (o[0] == 1 && o[4] == 1 && o[8] == 1) ||
            (o[2] == 1 && o[4] == 1 && o[6] == 1)) {
            tt = 0;playy();

            h.innerHTML = '<h1 class="text-center text-uppercase ">O WINNER</h1>';
            t = 'x';
            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }
        if (tt == 9) {
            playyy();
            tt = 0;
            t = 'x';
            h.innerHTML = '<h1 class="text-center text-uppercase ">DRAW</h1>';
            setTimeout(() => {
                h.innerHTML = '<h1 class="text-center text-uppercase ">X O GAME</h1>';
                x = [0, 0, 0, 0, 0, 0, 0, 0, 0]; o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (let i = 1; i <= 9; i++) {
                    document.getElementById(`${i}`).innerHTML = '';
                }
            }, 3000)
        }


    }
}
