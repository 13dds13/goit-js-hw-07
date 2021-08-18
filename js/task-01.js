const mainListRef = document.querySelector('#categories');
// console.log(mainListRef);

const liItemRef = mainListRef.querySelectorAll('li.item');

//корректно работает до цифры '20' включительно ;)
const msg = arg => {
    if (arg.length === 1) {
        return `В списке 1 категория.`;
    };

    if (arg.length >= 2 && arg.length < 5) {
        return `В списке ${arg.length} категории.`;
    };

    return `В списке ${arg.length} категорий.`;
}

console.log(msg(liItemRef));

///////////////////////////////////////////////////////

// console.log(liItemRef)

liItemRef.forEach(item => {
    const titleRef = item.querySelector('h2').textContent;
    const countRef = item.querySelectorAll('li').length;
    console.log(`Категория: ${titleRef}, Количество элементов: ${countRef}`)
});