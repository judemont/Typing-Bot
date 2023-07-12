function runTenFastingers(){
    const selectedWordSelector = ".highlight";
    const inputSelector = "#inputfield";

    const input = document.querySelector(inputSelector);
    let word;
    const e = $.Event('keypress');
    e.which = 32;
    setInterval(function(){
        word = document.querySelector(selectedWordSelector).innerText;
        input.value = word;       
    },100);
}

window.addEventListener('load', function() {
    const tenFastingersRegExp = new RegExp("\\bhttps?://(?:www\\.)?10fastfingers\\.com/typing-test/.*")
    const url = window.location.href

    if(tenFastingersRegExp.test(url)){
        runTenFastingers()
    }
});

