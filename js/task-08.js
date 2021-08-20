const refs = {
    input: document.querySelector('input[type=number]'),
    btnCreate: document.querySelector('button[data-action=render]'),
    btnDest: document.querySelector('button[data-action=destroy]'),
    div: document.querySelector('#boxes'),
};

let userValue;
let divSizes = 30;

const rgbRandomValue = () => {
    const value = Math.round(Math.random() / 4 * 1000);
    return value;
};

const onUserInput = e => {
    userValue = Number(e.target.value);
};

const onUserClickCreate = () => {
    const divArr = [];

    for (let i = 1; i <= userValue; i +=1) {
        const newDiv = document.createElement('div');
        newDiv.style.width = `${divSizes}px`;
        newDiv.style.height = `${divSizes}px`;
        newDiv.style.background = `rgb(${rgbRandomValue()}, ${rgbRandomValue()}, ${rgbRandomValue()})`;

        divArr.push(newDiv);
        divSizes += 10;
    }
    
    refs.div.append(...divArr);
};

const onUserClickDestroy = () => {
    refs.div.innerHTML = '';
};

refs.input.addEventListener('input', onUserInput);
refs.btnCreate.addEventListener('click', onUserClickCreate);
refs.btnDest.addEventListener('click', onUserClickDestroy);


