const form = document.querySelector("form"),
eField = form.querySelector(".EM"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".PM"),
pInput = pField.querySelector("input");

const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.sign');
const loginLink = document.querySelector('.Wa a');
const signupLink = document.querySelector('.WM a');

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    if(eInput.value ==""){
        eField.classList.add("shake","error");
    }else{
        checkEmail();
    }
    
    if (pInput.value == "") {
        pField.classList.add("shake", "error");
    } else {
        validatePassword();
    }

    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    },500);

    eInput.onkeyup=()=>{
        checkEmail();
    }
    
    pInput.onkeyup = () => {
        validatePassword();
    };

    function checkEmail(){
        let pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "") ? errorTxt.innerText ="Enter a valid email address": errorTxt.innerText ="Email can't be blank"
        }else{
            eField.classList.remove("error");
        }
    }

    function validatePassword() {
        const password = pInput.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            pField.classList.add("error");
            let errorTxt = pField.querySelector(".error-txt");
            errorTxt.innerText = "Password must be at least 8 characters and contain letters and numbers";
        } else {
            pField.classList.remove("error");
        }
    }

    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href="#";
        console.log("form submitted")
        form.reset();
    }
}


loginLink.addEventListener('click', () => {
  // Hide the signup form.
  signupForm.classList.add('visible');

  // Show the login form.
  loginForm.classList.add('hidden');
});

signupLink.addEventListener('click', () => {
  // Hide the login form.
  loginForm.classList.remove('hidden');

  // Show the signup form.
  signupForm.classList.remove('visible');
  signupForm.classList.add('hidden');
});
