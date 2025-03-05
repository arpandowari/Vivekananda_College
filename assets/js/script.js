let image = document.getElementById("fullpage");
let imgpath1 = document.getElementById("popup-image");

function imageshow(action, imagepath) {
    if (action) {
        imgpath1.src = imagepath;
        image.style.display = 'flex'
    }

    if (action == false) {
        imgpath1.src = "";
        image.style.display = 'none'
    }
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        valid = false;
        document.getElementById('nameError').style.display = 'inline';
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').style.display = 'inline';
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        valid = false;
        document.getElementById('phoneError').style.display = 'inline';
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        valid = false;
        document.getElementById('messageError').style.display = 'inline';
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    if (!valid) {
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this page!");
});