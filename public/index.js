/*
* Heavy inpiration for this javascript taken from the index.js found in 
* the assignment 5 template written by Robin Hess for his CS 290 Web Development
* class.
*
*/




var allCalcs = [];

// function addField()

// function populateInputs()

// function readInputs()

// function doCalculation()

function createCalculator(calcName, calcDescription) {
    var newCalc = Handlebars.templates.calc({
        name: calcName,
        description: calcDescription,
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

    console.log('test 1')
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
            createCalculator(calc.name, calc.description);
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
        console.log("test 0");
    }

    var modalCloseButton = document.querySelector('#create-calc-modal .modal-close-button');
    if (modalCloseButton) {
        modalCloseButton.addEventListener('click', hideCreateCalcModal);
        console.log("test 0");
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


})
