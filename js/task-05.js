const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (eve) => {
    const usersInput = eve.currentTarget.value;
    refs.output.textContent = usersInput;
});
