const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const onUserInput = eve => {
    const rangeValue = eve.currentTarget.value;
    text.style.fontSize = `${rangeValue}px`;
};

range.addEventListener('input', onUserInput);