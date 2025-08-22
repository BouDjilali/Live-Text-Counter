const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const ramainingCounterEl = document.getElementById("remaining-counter")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
});
updateCounter();
function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    ramainingCounterEl.innerText = textareaEl.getAttribute("maxLength") -
    textareaEl.value.length;
}

