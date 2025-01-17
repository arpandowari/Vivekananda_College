// const signInButton = document.getElementById('signIn');
// const signUpButton = document.getElementById('signUp');
// const container = document.querySelector('.container');

// signInButton.addEventListener('click', () => {
//     container.classList.remove('right-panel-active');
// });

// signUpButton.addEventListener('click', () => {
//     container.classList.add('right-panel-active');
// });

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-460px";
    y.style.left = "0px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "0px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function Regcheck() {
    let uname = document.getElementById('uname');
    let uemail = document.getElementById('uemail');
    let password = document.getElementById('password');
    let cpassword = document.getElementById('cpassword');
    let check = document.getElementById('chrckbox').checked;
    let phone = document.getElementById('phone');
    let error = document.getElementById('error');
    const phonePattern = /^[6-9]{1}[0-9]{9}$/;
    if (uname.value == '' || uname.value == ' ') {
        // alert("Please Enter Name...");
        error.innerText = "Please Enter Name...";
        uname.style.border = "1px solid red";
        uname.focus();
        return false;
    } else if (uemail.value == '') {
        alert("Please Enter Email...");
        uemail.style.border = "1px solid red";
        uemail.focus();
        return false;
    } else if (password.value == '') {
        alert("Please Enter Password...");
        password.style.border = "1px solid red";
        password.focus();
        return false;
    } else if (cpassword.value == '') {
        alert("Please Enter Confirm Password...");
        cpassword.style.border = "1px solid red";
        cpassword.focus();
        return false;
    } else if (password.value != cpassword.value) {
        alert("Password & Confirm Password don't Match...");
        cpassword.style.border = "1px solid red";
        cpassword.focus();
        return false;

    } else if (!phonePattern.test(phone.value)) {
        alert("Enter A valid phone no...");
        phone.style.border = "1px solid red";
        phone.focus();
        return false;




    } else {
        alert("Your Registration Successful.");
        return true;
    }
}


function Regcheck1() {

    let password = document.getElementById('password1');
    let phone = document.getElementById('phone1');
    let error = document.getElementById('error');
    const phonePattern = /^[6-9]{1}[0-9]{9}$/;

    if (!phonePattern.test(phone.value)) {
        alert("Enter A valid phone no...");
        phone.style.border = "1px solid red";
        phone.focus();
        return false;
    } else if (password.value == '') {
        alert("Please Enter Password...");
        password.style.border = "1px solid red";
        password.focus();
        return false;
    } else {
        alert("Thank you for varify you.......");
    }
}