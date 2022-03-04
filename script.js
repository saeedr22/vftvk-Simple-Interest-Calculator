var model = {};

function compute() {
    bindModel();
    console.log(model);
    if (validate() == true) {
        model.result = computeResult();
        document.getElementById('result').innerHTML = generateResultText();
    }
}

function bindModel() {
    model.principal = getValue("principal");
    model.rate = getValue("rate");
    model.year = getValue("years");
}

function generateResultText() {
    return `if you deposit over <mark>${model.principal}</mark>
                at an interest rate of <mark>${model.rate} </mark>
                you will receive an amount of <mark>${model.result}</mark>
                in the year <mark>${2022+(+model.year)}</mark>`;
}

function validate() {
    if (model.year == null || model.year == 0) {
        alert('please enter years ');
        return false;
    } else if (model.principal == null || model.principal <= 0) {
        alert('please enter valid Amount');
        document.getElementById('principal').focus();
        return false;
    } else if (model.rate == null) {
        alert('please enter rate');
        return false;
    }
    return true;
}

function getValue(element) {
    if (document.getElementById(element) == null)
        return "";
    return document.getElementById(element).value;
}

function computeResult() {
    return model.principal * model.year * model.rate;
}

function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}