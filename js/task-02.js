const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsAdd = arr => arr.map(item => {
  const newLi = document.createElement('li');
  newLi.textContent = item;
  return newLi;
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsAdd(ingredients));