var data = 0;

document.getElementById("counting").innerText = data;

function increment(input) {
    // var data = Number(document.getElementById("counting").innerText);
    data +=input;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function decrement(input) {
    // var data = Number(document.getElementById("counting").innerText);
    data -= input;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function reset() {
    data = 0;
    document.getElementById("counting").innerText = data;
}

function doPlus() {
    var input= Number(document.getElementById("input_box").value);
    increment(input);
    // data = data < 0 ? 0 : data;
    // document.getElementById("counting").innerText = data;
}

function doMinus() {
    var input= Number(document.getElementById("input_box").value);
    decrement(input);
}
