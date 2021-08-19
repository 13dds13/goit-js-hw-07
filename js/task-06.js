const input = document.querySelector('#validation-input');
const lengthValue = input.getAttribute('data-length');

input.addEventListener('blur', (eve) => {
    
    const usersInput = eve.currentTarget.value;
    
    if (usersInput.length < lengthValue) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
    
    if (usersInput.length >= lengthValue) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    };
});