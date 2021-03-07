function zipChecker()  {
    var number = document.getElementById('zipCode').value;
    var text;

     if (number >= 10000 && number <= 50000){
         text = "We've got your area covered!";
         result.style.color= "green";
     } 
     else{
         text= "Sorry, we haven't expanded to that area yet.";
         result.style.color="red";
     }
     document.getElementById('result').innerHTML = text;
    }

    // Display Advertisement after five seconds of loading page
    function showAd(){
        document.getElementById('bannerAd').style.display = "block";
    }
    setTimeout(showAd, 5000);

    //Close Advertisement
     function cancelAd(){
         document.getElementById('bannerAd').style.display = "none"; 
     }
    
