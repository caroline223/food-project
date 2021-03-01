function zipChecker() {
    var number = document.getElementById('zipCode').nodeValue;
    var text;

    if (number >= 10000 && number <= 99999) {
        text = "We've got your area covered!";
        result.style.colr= "green";
    }
    else {
        text = "Sorry, we haven't expanded to that area yet.";
        result.style.color= "red";
    }
    document.getElementById('result').innerHTML = text;
}