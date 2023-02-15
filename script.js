const num = document.querySelector(".num")

function increase() {
    num.innerHTML++
}

function reset() {
    num.innerHTML = 0
}

function decrease() {
    if (num.innerHTML != 0) {
        num.innerHTML--
    }
}