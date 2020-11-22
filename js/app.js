document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const attractionListItem = createAttractionListItem(event.target);
    const attractionList = document.querySelector('#attraction-list');
    attractionList.appendChild(attractionListItem);

    event.target.reset();
}

const createAttractionListItem = function (form) {
    attractionListItem = document.createElement('li');
    attractionListItem.classList.add('attraction-list-item');

    addTextContentAndAppend(form); 

    return attractionListItem;
}

const handleDeleteAllClick = function (event) {
    const attractionList = document.querySelector('#attraction-list');
    attractionList.innerHTML = '';
}

const addTextContentAndAppend = function (form) {
    createNecessaryElements(form);
    addTextContent(form);
    
    attractionListItem.append(attractionName, city, country);
}

const createNecessaryElements = function (form) {
    attractionName = document.createElement('h2');
    city = document.createElement('h3');
    country = document.createElement('p');
}

const addTextContent = function (form) {
    attractionName.textContent = form['attraction-name'].value;
    city.textContent = form.city.value;
    country.textContent = form.country.value;
}