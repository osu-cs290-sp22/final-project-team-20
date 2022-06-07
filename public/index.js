/*
* Heavy inpiration for this javascript taken from the index.js found in 
* the assignment 5 template written by Robin Hess for his CS 290 Web Development
* class.
*
*/




var allCalcs = [];

function addField()

function populateInputs()

function readInputs()

function doCalculation()

function createCalculator(calcTitle, calcDescription, calcAuthor) {
     var newCalc = Handlebars.templates.calc({
         title: calcTitle,
         description: calcDescription
     })
    var calcContainer = document.querySelector('calc-container');
    calcContainer.insertAdjacentHTML('beforeend', newCalc);
}

function showCreateCalcModal() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createCalcModal = document.getElementById('create-calc-modal');

    modalBackdrop.classList.remove('hidden');
    creatteCalcModal.classList.remove('hidden');
}

function hideCreateCalcModal() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createCalcModal = document.getElementById('create-calc-modal');

    modalBackdrop.classList.remove('hidden');
    creatteCalcModal.classList.remove('hidden');

    clearCalcInputValues();
}

function clearCalcInputValues() {
    var calcInputElems = document.getElementsByClassName('calc-input-element');
    for (var i = 0; i < calcInputElems.length; i++) {
        var input = calcInputElems[i].querySelector('input, textarea');
        input.value = '';
    }
}

function handleModalAcceptClick() {
    var calcName = document.getElementById('calc-name-input').value;
    var calcDescription = document.getElementById('calc-description-input').value;

    if (calcName && calcDescription) {
        allCalcs.push({
            name: calcName,
            description: calcDescription 
        })
    }
}

function doSearchUpdate() {

}

function calcMatchesSearchQuery() {

}

function parseCalcElem(calcElem) {
    var calc = {};

    var calcNameElem = calcElem.querySelector('.calc-name')
    calc.name = calcNameElem.textContent.trim();


    var calcDescriptionElem = calc.Elem.querySelector('.calc-description');
    calc.description = calcDescriptionElem.textContent.trim();

    return calc;
}

window.addEventListener('DOMContentLoaded', function () {
    var calcElemsCollection = document.getElementsByClassName('calc');
    for (var i = 0; i < calcElemsCollection.length; i++) {
        allCalcs.push(parseCalcElem(calcElemsCollection[i]));
    }

    var createCalcButton = document.getElementById('create-calc-button');
    if (createCalcButton) {
        createCalcButton.addEventListener('click', showCreateCalcModal);
    }

    var modalCancelButton = document.querySelector('#create-calc-modal .modal-cancel-button');
    if (modalCancalButton) {
        modalCancalButton.addEventListener('click', hideCreateCalcModal);
    }

    var modalCloseButton = document.querySelector('#create-calc-modal .modal-close-button');
    if (modalCancalButton) {
        modalCloseButton.addEventListener('click', hideCreateCalcModal);
    }

    var modalAcceptButton = document.querySelector('#create-calc-modal .modal-accept-button');
    if (modalAcceptButton) {
        modalAcceptButton.addEventListener
    }
    var searchButton = document.getElementById('navbar-search-button');
    
    var searchInput = document.getElementById('navbar-search-input');


})
