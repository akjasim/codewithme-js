let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let usernameMsg = document.getElementById('username-msg');
let passwordMsg = document.getElementById('password-msg');

let usernameOk = false;
let passwordOk = false;

function usernameHandler() {
    let userValue = event.target.value;
    if (userValue.length < 5) {
        usernameMsg.innerHTML = 'Atleast 5 characters are required';
    } else {
        usernameOk = true;
        usernameMsg.innerHTML = '';
    }
}

function passwordHandler() {
    let passValue = event.target.value;
    if (passValue.length < 8) {
        passwordMsg.innerHTML = 'Atleast 8 characters are required';
    } else {
        passwordOk = true;
        passwordMsg.innerHTML = '';
    }
}

function submitHandler() {
    event.preventDefault();
    if (usernameOk && passwordOk) {
        usernameInput.style.border = '2px solid green';
        passwordInput.style.border = '2px solid green'
    } else {
        usernameInput.style.border = '2px solid red';
        passwordInput.style.border = '2px solid red'
    }
}