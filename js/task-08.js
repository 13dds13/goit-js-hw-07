const refs = {
    input: document.querySelector('input[type=number]'),
    btnCreate: document.querySelector('button[data-action=render]'),
    btnDest: document.querySelector('button[data-action=destroy]'),
    div: document.querySelector('#boxes'),
};

let userValue;
let divSizes = 30;

const randomColor = () => {
    
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
        newDiv.style.background = `green`;

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


