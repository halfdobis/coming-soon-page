const email = document.querySelector(".notify__input");
const button = document.querySelector(".notify__button");



//needed to add another animation for text and hook it to the button since before and after pseudos don't work on input fields


email.addEventListener('keyup', function (event) {
    var email_check = email.checkValidity();
    // if email is wrong format
    if(email_check == false){
        email.classList.add("email_wrong");
        button.classList.add("email_wrong_text");
        console.log("email wrong!");
    }
    // if input field is empty and or the email is valid
    else{
        email.classList.remove("email_wrong");
        button.classList.remove("email_wrong_text");
    }
  });