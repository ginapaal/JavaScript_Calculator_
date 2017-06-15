function insertDigit(digit) {
    document.getElementById("input").value += digit;
}

function reset() {
    document.getElementById("input").value = "";
}

function doTheMath() {
    var inputDatas = document.getElementById("input").value;
    var inputLen = inputDatas.length;

    var addPos = inputDatas.indexOf("+");
    var subPos = inputDatas.indexOf("-");
    var multiplyPos = inputDatas.indexOf("*");
    var divPos = inputDatas.indexOf("/");

    if (addPos >= 0) {
        var x = inputDatas.substring(0, addPos);
        var y = inputDatas.slice(addPos + 1, inputLen);
        var result = parseFloat(x) + parseFloat(y);
        document.getElementById("input").value = result
    }

    else if (subPos >= 0) {
        var x = inputDatas.substring(0, subPos);
        var y = inputDatas.slice(subPos + 1, inputLen)
        var result = parseFloat(x) - parseFloat(y);
        document.getElementById("input").value = result;
    }
}