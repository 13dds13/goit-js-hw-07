const input = document.querySelector('#validation-input');

const onUserInput = evt => {
    
    const usersInput = evt.currentTarget.value;
    const lengthValue = Number(evt.currentTarget.dataset.length);

    usersInput.length === lengthValue ?
        addRemoveClass('valid', 'invalid') :
        addRemoveClass('invalid', 'valid');
    }

const addRemoveClass = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
}

input.addEventListener('blur', onUserInput);