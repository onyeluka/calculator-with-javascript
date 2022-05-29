function tangent() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(val);
}

function roundup() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.round(val);
}

function sqrt() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.sqrt(val);
}

function logri() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.log(val);

}

function cosine() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.cos(val);

}

function tange() {
    var val = document.getElementById("display").value;
    document.getElementById("display").value = Math.tan(val);

}

function display(val) {
    document.getElementById("display").value += val;
}
//dont use eval method, it has been discontinued, poses high security risk
function doMath() {
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
}

function del() {
    document.getElementById("display").value = "";
}