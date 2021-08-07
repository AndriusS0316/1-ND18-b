// astuoniolikta b uzduotis


// jei duodamas html tag pavadinimas
const selector = 'header';
const DOM = document.getElementsByTagName(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodama css klase (butinai tik viena ji ir ne kitaip)
const selector = 'header';
const DOM = document.getElementsByClassName(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas id (imanomas tik vienas)
const selector = 'header';
const DOM = document.getElementById(selector);
DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas bet koks selector'ius, bet atitinkantis CSS selector'iu taisykles
const selector = 'header';
const DOM = document.querySelector(selector);
DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas bet koks selector'ius, bet atitinkantis CSS selector'iu taisykles
const selector = 'header';
const DOM = document.querySelectorAll(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);