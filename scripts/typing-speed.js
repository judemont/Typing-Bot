const highlightedLetterSelector = ".letter_marked,.letter_space_marked";
const typingDelay = 1

function pressKey(key){
    console.log(key)


    const keypressEvent = new KeyboardEvent('keypress', {
        key: key,
        which: key.charCodeAt(0),
        keyCode: key.charCodeAt(0),
        charCode: key.charCodeAt(0),
    });

    document.dispatchEvent(keypressEvent);

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
