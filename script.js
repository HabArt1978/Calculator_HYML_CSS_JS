'use strict'

const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc_btn')) return;
   
    const value = event.target.textContent;

    switch (value) {
        case 'C':
            result.textContent = '';
            break;

        case '=':
            result.textContent = eval(result.textContent).toFixed(2);
            break;

        case '< back':
            result.textContent = result.textContent.slice(0, -1);
            break 

        case '% inactive':
            result.textContent = eval(result.textContent) / 100;    
            // Не хватает знаний для написания функции, правильного подсчёта процентов.
            // Учим регулярные выражения!
        default:
            result.textContent += value;
    }
   
}); 