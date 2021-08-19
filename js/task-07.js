const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener('click', (eve) => {
    const rangeValue = eve.currentTarget.value;
    text.style.fontSize = `${rangeValue}px`;
});

