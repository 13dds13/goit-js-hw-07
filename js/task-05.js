const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (eve) => {
    const userInput = eve.currentTarget.value;

    if (userInput) {
        refs.output.textContent = userInput;
    };

    if (!userInput) {
        refs.output.textContent = 'незнакомец';
    };
});
