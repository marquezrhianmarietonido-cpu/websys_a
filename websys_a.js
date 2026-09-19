function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let sum = num1 + num2 + num3;
    let product = num1 * num2 * num3;
    let remainder = (num1 % num2) % num3;
    let quotient = (num1 / num2) / num3;

    document.getElementById("result").innerHTML =
        "Sum: " + sum + "<br>" +
        "Product: " + product + "<br>" +
        "Remainder: " + remainder + "<br>" +
        "Quotient: " + quotient;
}
