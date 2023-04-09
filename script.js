var data = 0;

document.getElementById("counting").innerText = data;

function increment5() {
    data = data + 5;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function increment1() {
    data = data + 1;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function reset() {
    data = 0;
    document.getElementById("counting").innerText = data;
}

function decrement5() {
    data = data - 5;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function decrement1() {
    data = data - 1;
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function doPlus() {
    data = data + Number(document.getElementById("input").value);
    // data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}

function doMinus() {
    data = data - Number(document.getElementById("input").value);
    // data = data < 0 ? 0 : data;
    // console.log(data);
    document.getElementById("counting").innerText = data;
}
