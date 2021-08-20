const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (eve) => {
    const usersInput = eve.currentTarget.value;

    if (usersInput) {
        refs.output.textContent = usersInput;
    }

    if (!usersInput) {
        refs.output.textContent = 'незнакомец';
    }
});
