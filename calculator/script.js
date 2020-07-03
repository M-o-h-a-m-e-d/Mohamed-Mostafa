//              calculator
let firstNumper = document.getElementById("first"),
    secondNumper = document.getElementById("second"),
    theValue = document.getElementById("methods"),
    theResult = document.getElementById("result"),
    button = document.getElementById("btn");
button.onclick = function(first, second) {
    if (theValue.value == "+") {
        theResult.innerText = +firstNumper.value + +secondNumper.value
    } else if (theValue.value == "-") {
        theResult.innerText = +firstNumper.value - +secondNumper.value
    } else if (theValue.value == "*") {
        theResult.innerText = +firstNumper.value * +secondNumper.value
    } else if (theValue.value == "/") {
        theResult.innerText = +firstNumper.value / +secondNumper.value
    } else {
            theResult.innerText = "plese choose a value"
        }

    if (firstNumper.value === "" && secondNumper.value === "") {
        theResult.innerText = "please enter two numpers"
    } else if (firstNumper.value === "") {
        theResult.innerText = "please enter first numper"
    } else if (secondNumper.value === "") {
        theResult.innerText = "please enter second numper"
    } else if (firstNumper.value === "0" || secondNumper.value === "0") {
        theResult.innerText = "0 not allowed"
    } else if (isNaN(firstNumper.value) || isNaN(secondNumper.value)) {
        theResult.innerText = "please enter a numper"
    }
}
