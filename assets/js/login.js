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