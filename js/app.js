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

    addTextContentAndAppendChild(form); 

    return attractionListItem;
}

const handleDeleteAllClick = function (event) {
    const attractionList = document.querySelector('#attraction-list');
    attractionList.innerHTML = '';
}

const addTextContentAndAppendChild = function (form) {
    const attractionName = document.createElement('h2');
    attractionName.textContent = form['attraction-name'].value;
    const city = document.createElement('h3');
    city.textContent = form.city.value;
    const country = document.createElement('p');
    country.textContent = form.country.value;
    attractionListItem.append(attractionName, city, country);
}
