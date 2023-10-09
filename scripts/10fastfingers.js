const highlightedWordSelector = ".highlight"
const inputSelector = "#inputfield"
const typingDelay = 100

function nextWord(){
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

const input = document.querySelector(inputSelector);
if (input != null) {
    let highlightElement;
    let word;
    
    const loop = setInterval(function() {
        highlightElement = document.querySelector(highlightedWordSelector);
        
        if (highlightElement != null) {
            nextWord()
            highlightElement = document.querySelector(highlightedWordSelector);
            word = highlightElement.innerHTML;
            input.focus();
            input.value = word;
        }
    
    }, typingDelay);
    
}

