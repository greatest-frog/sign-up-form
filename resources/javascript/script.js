const password = document.getElementById('password');
const password_confirm = document.getElementById('password_confirm');
const error_msg = document.querySelector('.error_msg');

password_confirm.addEventListener('input', e => {
    if (e.target.value !== password.value) {
        error_msg.classList.remove('none-display');
        password_confirm.classList.add('error');
        password_confirm.setCustomValidity("Password does not match");
    }
    else {
        error_msg.classList.add('none-display');
        password_confirm.classList.remove('error');
        password_confirm.setCustomValidity("");
    }
})

password.addEventListener('input', e => {
    if (e.target.value === password_confirm.value) {
        error_msg.classList.add('none-display');
        password_confirm.classList.remove('error');
        password_confirm.setCustomValidity("");
    }
})