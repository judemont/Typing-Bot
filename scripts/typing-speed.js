const highlightedLetterSelector = ".letter_marked,.letter_space_marked";
const typingDelay = 10

function pressKey(key){


    const keydownEvent = new KeyboardEvent('keydown', {
        key: key,
        which: key.charCodeAt(0),
        keyCode: key.charCodeAt(0),
        charCode: key.charCodeAt(0),
    });

    const keypressEvent = new KeyboardEvent('keypress', {
        key: key,
        which: key.charCodeAt(0),
        keyCode: key.charCodeAt(0),
        charCode: key.charCodeAt(0),
    });
    
    const keyupEvent = new KeyboardEvent('keyup', {
        key: key,
        which: key.charCodeAt(0),
        keyCode: key.charCodeAt(0),
        charCode: key.charCodeAt(0),
    });

    document.dispatchEvent(keydownEvent);
    document.dispatchEvent(keypressEvent);
    document.dispatchEvent(keyupEvent);

}

let letter
let letterEl

const loop = setInterval(function() {
    letterEl = document.querySelectorAll(highlightedLetterSelector);

    if (letterEl.length >= 1) {
        letterEl = letterEl[0];
        letter = letterEl.innerHTML;
        console.log(letter);
        if (letter == "_") {
            letter = " ";
        }
        pressKey(letter)
    }
}, typingDelay)
