const highlightedLetterSelector = ".letter_marked,.letter_space_marked";

const footContainerSelector = "#result";

const delayRangeSelector = `
<h3>Typing Delay :</h3>
<input type="range" min="0" max="500" name="typingDelay" id="typingDelay">
`;

const typingDelayRangeSelector = "#typingDelay";

var typingDelay = 100;

var loop

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

const footContainer = document.querySelector(footContainerSelector);
footContainer.innerHTML += delayRangeSelector;

document.querySelector(typingDelayRangeSelector).addEventListener("change", function (e) {
    typingDelay = e.target.value;
    clearInterval(loop);
    startLoop();
    console.log(typingDelay);
});



let letter
let letterEl

function startLoop() {
    loop = setInterval(function() {
        letterEl = document.querySelectorAll(highlightedLetterSelector);

        if (letterEl.length >= 1) {
            letterEl = letterEl[0];
            letter = letterEl.innerHTML;

            pressKey(letter)
        }
    }, typingDelay)
}

startLoop()