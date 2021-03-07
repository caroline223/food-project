//Confirm submission about form

var form = document.getElementById('registerForm');
      form.addEventListener("submit", function(){
          alert("Thank you for sumbitting this form. We will contact you soon!");
          console.log("The form has been sumbitted!");
      })