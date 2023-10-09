const highlightedWordSelector = ".highlight";
const inputSelector = "#inputfield";
const footContainerSelector = "#auswertung-box";
const delayRangeSelector = `
<h3>Typing Delay :</h3>
<input type="range" min="0" max="2000" name="typingDelay" id="typingDelay">
`;
const typingDelayRangeSelector = "#typingDelay";
var typingDelay = 100;
var loop;

function nextWord() {
    const keydownEvent = new KeyboardEvent('keydown', {
        key: ' ',
        which: 32,
        keyCode: 32
    });

    const keyupEvent = new KeyboardEvent('keyup', {
        key: ' ',
        which: 32,
        keyCode: 32
    });

    input.dispatchEvent(keydownEvent);
    input.dispatchEvent(keyupEvent);
}


const footContainer = document.querySelector(footContainerSelector);
footContainer.innerHTML = delayRangeSelector;

document.querySelector(typingDelayRangeSelector).addEventListener("change", function (e) {
    typingDelay = e.target.value;
    clearInterval(loop);
    startLoop();
    console.log(typingDelay);
});

const input = document.querySelector(inputSelector);

if (input != null) {
    let highlightElement;
    let word;

    function startLoop() {
        loop = setInterval(function () {
            highlightElement = document.querySelector(highlightedWordSelector);

            if (highlightElement != null) {
                nextWord();
                highlightElement = document.querySelector(highlightedWordSelector);
                word = highlightElement.innerHTML;
                input.focus();
                input.value = word;
            }
        }, typingDelay);
    }

    startLoop();
}
