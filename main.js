const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let text = 0;
let letter = -10;

const addLetter = () => {
    if (letter >= 0) {
        spnText.textContent += txt[text][letter];
    }
    letter++;  
            if (letter == txt[text].length) {
                text++;
                if (text == txt.length) return;

                return setTimeout(() => {
                    letter = -10;
                    spnText.textContent = '';
                    addLetter();
                }, 2000)
            }
        
    setTimeout(addLetter, 100);
}
addLetter();


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
