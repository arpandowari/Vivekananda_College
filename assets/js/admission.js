document.getElementById('admissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let birthMonth = document.getElementById('birthMonth').value;
    let birthDay = document.getElementById('birthDay').value;
    let birthYear = document.getElementById('birthYear').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let citizenship = document.getElementById('citizenship').value;
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let streetAddress = document.getElementById('streetAddress').value.trim();
    let city = document.getElementById('city').value.trim();
    let state = document.getElementById('state').value.trim();
    let zip = document.getElementById('zip').value.trim();
    let emergencyFirstName = document.getElementById('emergencyFirstName').value.trim();
    let emergencyLastName = document.getElementById('emergencyLastName').value.trim();
    let relationship = document.getElementById('relationship').value.trim();
    let emergencyPhone = document.getElementById('emergencyPhone').value.trim();
    let languages = document.querySelector('input[name="languages"]:checked');

    if (!firstName || !lastName || !birthMonth || !birthDay || !birthYear || !gender || !citizenship || !phone || !email || !streetAddress || !city || !state || !zip || !emergencyFirstName || !emergencyLastName || !relationship || !emergencyPhone || !languages) {
        alert('Please fill all required fields.');
        return;
    }

    if (!validatePhone(phone) || !validatePhone(emergencyPhone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(\d{3}\) \d{3}-\d{4}$/;
    return re.test(phone);
}