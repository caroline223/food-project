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

// Displays advertisement after five seconds of loading page

function showAd() {
    document.getElementById('bannerAd').style.display = "block";
}
setTimeout(showAd, 5000);

//Close advertisement

function cancelAd() {
    document.getElementById('bannerAd').style.display = "none";
}