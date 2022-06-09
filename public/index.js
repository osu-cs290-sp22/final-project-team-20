/*
* Heavy inpiration for this javascript taken from the index.js found in 
* the assignment 5 template written by Robin Hess for his CS 290 Web Development
* class.
*
* Method of storing functions in json files and parsing them in js taken from
* https://stackoverflow.com/questions/36517173/how-to-store-a-javascript-function-in-json#:~:text=%22There%20is%20no%20way%20to,be%20expressed%20as%20a%20string 
*/




var allCalcs = [];

function displayAnswer(answer) {
    var answerBox = document.getElementById('display-answer-modal');
    answerBox.classList.remove('hidden');

    var answerField = document.querySelector('.modal-body');
    answerField.removeChild(document.getElementById('answer-text'))

    var content = Handlebars.templates.answer({
        number: answer
    });
    answerField.insertAdjacentHTML('beforeend', content);


}

function doCalculation() {
    var functionArguments = document.getElementById('current-calc-arguments').textContent;
    var functionBody = document.getElementById('current-calc-body').textContent;

    var calcEquation = new Function(functionArguments, functionBody);

    var inputFields = document.getElementsByClassName('calc-input-element');
    var inputValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < inputFields.length; i++) {
        var check = inputFields[i].querySelector('input, textarea').value;
        if (!(check && parseFloat(check))) {
            alert('All input fields must be fille with numbers to use the Calculator');
            return;
        }
    }

    for (var i = 0; i < inputFields.length; i++) {
        var value = parseFloat(inputFields[i].querySelector('input, textarea').value);
        inputValues[i] = value;
    }

    // var answer = calcEquation(inputValues[0], inputValues[1]);
    var answer = calcEquation(inputValues[0], inputValues[1], inputValues[2], inputValues[3],inputValues[4], inputValues[5], inputValues[6], inputValues[7], inputValues[8], inputValues[9]);
    displayAnswer(answer);
    clearCalcInputValues();

}

function createCalculator(calcName, calcDescription, calcLink) {
    var newCalc = Handlebars.templates.calc({
        name: calcName,
        description: calcDescription,
        link: calcLink
    })
    var calcContainer = document.querySelector('main.calc-container');
    calcContainer.insertAdjacentHTML('beforeend', newCalc);
    calcContainer.insertAdjacentHTML
}

function showCreateCalcModal() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createCalcModal = document.getElementById('create-calc-modal');

    modalBackdrop.classList.remove('hidden');
    createCalcModal.classList.remove('hidden');
}

function hideCreateCalcModal() {
    var modalBackdrop = document.getElementById('modal-backdrop');
    var createCalcModal = document.getElementById('create-calc-modal');

    modalBackdrop.classList.add('hidden');
    createCalcModal.classList.add('hidden');

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
        });
        clearSearchAndReinsertCalcs();
        hideCreateCalcModal();
    }else{
        alert('The Calculator Name, Description, and Equation must be specified.');
    }
}

function clearSearchAndReinsertCalcs() {
    document.getElementById('navbar-search-input').value = "";
    doSearchUpdate();
  }

function doSearchUpdate() {
    var searchQuery = document.getElementById('navbar-search-input').value;

    var calcContainer = document.querySelector('.calc-container');
    if (calcContainer) {
        while (calcContainer.lastChild) {
            calcContainer.removeChild(calcContainer.lastChild);
        }
    }

    allCalcs.forEach(function (calc) {
        if (calcMatchesSearchQuery(calc, searchQuery)) {
            createCalculator(calc.name, calc.description, calc.link);
        }
    });
}

function calcMatchesSearchQuery(calc, searchQuery) {
    if (!searchQuery) {
        return true;
    }

        searchQuery = searchQuery.trim().toLowerCase();
        return (calc.name + " " + calc.description).toLowerCase().indexOf(searchQuery) >= 0;
}

function parseCalcElem(calcElem) {
    var calc = {};

    var calcNameElem = calcElem.querySelector('.calc-name')
    calc.name = calcNameElem.textContent.trim();


    var calcDescriptionElem = calcElem.querySelector('.calc-description');
    calc.description = calcDescriptionElem.textContent.trim();

    var calcLinkElem = calcElem.querySelector('.calc-name a')
    calc.link = calcLinkElem.pathname;

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
    if (modalCancelButton) {
        modalCancelButton.addEventListener('click', hideCreateCalcModal);
    }

    var modalCloseButton = document.querySelector('#create-calc-modal .modal-close-button');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', hideCreateCalcModal);
    }

    var modalAcceptButton = document.querySelector('#create-calc-modal .modal-accept-button');
    if (modalAcceptButton) {
        modalAcceptButton.addEventListener('click', handleModalAcceptClick)
    }
    var searchButton = document.getElementById('navbar-search-button');
        if (searchButton) {
            searchButton.addEventListener('click', doSearchUpdate);
        }
    
    var searchInput = document.getElementById('navbar-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', doSearchUpdate);
        }

    var answerButton = document.getElementById('calculate-answer-button'); 
        if (answerButton) {
            answerButton.addEventListener('click', doCalculation);
        }


})
