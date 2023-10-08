var input = document.getElementById('inputfield');

var loop = setInterval(function() {
    var keydownEvent = new KeyboardEvent('keydown', {
        key: ' ',
        which: 32,
    });
    
    var keyupEvent = new KeyboardEvent('keyup', {
        key: ' ',
        which: 32,
        keyCode: 32
    });
    
    input.dispatchEvent(keydownEvent);
    input.dispatchEvent(keyupEvent);

    var highlightElement = document.querySelector('.highlight');
    
    if (highlightElement) {
        var word = highlightElement.innerHTML;
        input.focus();
        input.value = word;
    }
}, 100);
