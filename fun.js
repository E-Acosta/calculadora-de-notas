let summit = document.getElementById("ok");
let num1 = document.getElementById("corte1");
let num2 = document.getElementById("corte2");
let message = document.getElementById("ResultMessage")
let MainContainer = document.getElementById("MainContainer")
summit.onclick = () => {
    let result = round(((3 - ((num1.value * 0.1) + (num2.value * 0.25))) / 4) * 10, 2)
    if (!Number.isNaN(result)) {
        console.log(`necesitas un ${result}`)
        message.innerHTML = `necesitas un ${result}`
    } else {
        MainContainer.style = "background-color: red;"
        MainContainer.innerHTML = `<h1 style="color: yellow;">ERROR</h1>`
    }
}

function stopDefAction(evt) {
    evt.preventDefault();
}

function isNUmber(n) {
    try {
        parseFloat(n)
        return true
    } catch (error) {
        return false
    }
}

function round(num, decimales) {
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
    // x * 10 ^ (-decimales)
    num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}