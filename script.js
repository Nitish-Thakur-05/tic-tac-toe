let box = document.querySelectorAll('.box');
let boxtext = document.querySelectorAll('.box p');
let result = document.querySelector('.result');
let btn = document.querySelector('.btn');

box = Array.from(box);
boxtext = Array.from(boxtext);

let user = 'x';
box.forEach((curr, index) => {
    curr.addEventListener('click', () => {
        if(curr.firstChild.innerText) {
            return
        }

        if (user === 'x') {
            curr.firstChild.innerText = user.toUpperCase();
            user = 'o';
        } else if (user === 'o') {
            curr.firstChild.innerText = user.toUpperCase();
            user = 'x';
        }
        winner()
    });
});

const winnerCombination = [
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 4, 8], [2, 4, 6]
];

function winner() {
    let isWinner = false
    winnerCombination.forEach(combination => {
        const [a, b, c] = combination;
        if (
            box[a].firstChild.innerText && 
            box[a].firstChild.innerText === box[b].firstChild.innerText && 
            box[b].firstChild.innerText === box[c].firstChild.innerText
        ) {
            isWinner = true
            result.textContent = `User ${box[c].firstChild.innerText} Win!`
            result.classList.remove('hide')
            btn.classList.remove('hide')
        }
    });

    if (!isWinner && boxtext.every((curr) => {
        return curr.innerText != ''
    })) {
        result.textContent = `Match Tie`
        result.classList.remove('hide')
        btn.classList.remove('hide')
    }
}



btn.addEventListener('click', () => {
    for(let a=0; a<9; a++) {
        box[a].firstChild.innerText = ''
    }

    result.classList.add('hide')
    btn.classList.add('hide')

})


// for of for in 
// do while loop
//