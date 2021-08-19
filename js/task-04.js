const refs = {
    dec: document.querySelector('#counter').firstElementChild,
    inc: document.querySelector('#counter').lastElementChild,
    value: document.querySelector('#value'),
};

let counterValue = 0;

// decrement

refs.dec.addEventListener('click', () => {
    console.log('в скрипте есть вариант с работой счётчика только в положительном диапазоне');

    counterValue -= 1;
    refs.value.textContent = counterValue;

    // вариант с if, чтобы значение счётчика не было
    // меньше нуля.
    // if (counterValue > 0) {
    //     counterValue -= 1;
    //     refs.value.textContent = counterValue;
    // }
});


// increment

refs.inc.addEventListener('click', () => {
    console.log('в скрипте есть вариант с работой счётчика только в положительном диапазоне');

    counterValue += 1;
    refs.value.textContent = counterValue;
});