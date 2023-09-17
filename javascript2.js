const form2 = document.querySelector(".form2"),
e_Field = form2.querySelector(".Email"),
e_Input = e_Field.querySelector("input"),
p_Field = form2.querySelector(".PM"),
p_Input = p_Field.querySelector("input"),
a_Field = form2.querySelector('.AN'),
a_Input = a_Field.querySelector("input"),
aID_Field = form2.querySelector('.AI'),
aID_Input = aID_Field.querySelector('input'),
AT_Field = form2.querySelector('.AT'),
AT_select = AT_Field.querySelector('select'),
ph_Field = form2.querySelector(".PN"),
ph_Input = ph_Field.querySelector("input"),
cp_Field = form2.querySelector('.CPM'),
cp_Input = cp_Field.querySelector("input");

var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form2.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    if(e_Input.value ==""){
        e_Field.classList.add("shake","error");
    }else{
        validate_mail();
    }
    
    e_Input.onkeyup=()=>{
        validate_mail();
    }

    if (p_Input.value == "") {
        p_Field.classList.add("shake", "error");
    } else {
        validatePassword();
    }

    p_Input.onkeyup = () => {
        validatePassword();
    };
    
    if (a_Input.value =="") {
        a_Field.classList.add("shake","error");
    }

    a_Input.onkeyup=()=>{
        if (a_Input.value =="") {
            a_Field.classList.add("error");
        }else{
            a_Field.classList.remove("error");
        }
    }
    
    if (AT_select.value =="") {
        AT_Field.classList.add("shake","error");
    }
    
    AT_select.onkeyup=()=>{
        if (AT_select.value =="") {
            AT_Field.classList.add("error");
        }else{
            AT_Field.classList.remove("error");
        }
    }
    
    if (aID_Input.value =="") {
        aID_Field.classList.add("shake","error")
    }else{
        aID_Field.classList.remove("error")
    }
    
    if (ph_Input.value == "") {
        ph_Field.classList.add("shake", "error");
    } else {
        validatePhoneNumberInput();
    }

    ph_Input.onkeyup = () => {
        validatePhoneNumberInput();
    };
    
    if (cp_Input.value == "") {
        cp_Field.classList.add("shake", "error");
    } else {
        validatePasswordConfirmation();
    }

    cp_Input.onkeyup = () => {
        validatePasswordConfirmation();
    };

    setTimeout(()=>{
        e_Field.classList.remove("shake");
        p_Field.classList.remove("shake");
        a_Field.classList.remove("shake");
        aID_Field.classList.remove("shake");
        ph_Field.classList.remove("shake");
        cp_Field.classList.remove("shake");
        AT_Field.classList.remove("shake");
    },500);
        
    
    function validate_mail() {
        if(!e_Input.value.match(emailRegex)){
            e_Field.classList.add("error");
            let errorTxt = e_Field.querySelector(".error-txt");
            (e_Input.value != "") ? errorTxt.innerText ="Enter a valid email address": errorTxt.innerText ="Email can't be blank"
        }else{
            e_Field.classList.remove("error");
        }
    }

    function validatePasswordConfirmation() {
        if (cp_Input.value !== p_Input.value) {
            cp_Field.classList.add("error");
            let errorTxt = cp_Field.querySelector(".error-txt");
            errorTxt.innerText = "Passwords do not match";
        } else {
            cp_Field.classList.remove("error");
        }
    }  

    function validatePassword() {
        const password = p_Input.value;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            p_Field.classList.add("error");
            let errorTxt = p_Field.querySelector(".error-txt");
            errorTxt.innerText = "Password must be at least 8 characters and contain letters and numbers";
        } else {
            p_Field.classList.remove("error");
        }
    }

    function validatePhoneNumberInput() {
        if (!ph_Input.value.match(/^\d+$/)) {
            ph_Field.classList.add("error");
            let errorTxt = ph_Field.querySelector(".error-txt");
            errorTxt.innerText = "Phone number must contain only numbers";
        } else {
            ph_Field.classList.remove("error");
        }
    }
} 