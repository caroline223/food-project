var form = document.getElementById("choiceForm");

form.addEventListener("change", calculateTotal);

function calculateTotal() {
    var result = 0;
    console.log("Calculating...");

    //get style
    var foodStyle = document.getElementsByClassName("food-style");
    for (i = 0; i < foodStyle.length; i++){
        if (foodStyle[i].checked) {
            result = Number(foodStyle[i].value);
        }
    }

    //get tip
    var tip = document.getElementsByClassName("tip-calculated");
    for (i = 0; i < tip.length; i++){
        if (tip[i].checked){
            result = result + (result*Number(tip[i].value));
        }
    }
    result = result.toFixed(2);

    var totalElem = document.getElementById("totalCost");
    totalElem.innerHTML = result;
}

// Confirm submission of form
var form = document.getElementById('choiceForm');
form.addEventListener("submit", function () {
    alert("Thank you for submitting this form. We will contact you soon!");
    console.log("The form has been submitted!");
})
