const searchDrink = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText == '') {
        const errorMessage = document.getElementById('error-mssg');
        const p = document.createElement('p');
        p.classList.add('error-text');
        p.style.padding = '10px';
        p.style.color = 'white';
        p.innerText = `Search your drinks`;
        errorMessage.appendChild(p);
    } else {
        // load data
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => displayDrink(data.drinks));

        const errorMessage = document.getElementById('error-mssg');
        errorMessage.textContent = '';
    }
    searchField.value = '';
};

const displayDrink = drinks => {
    console.log(drinks);
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions}</p>
                    <p>Category: ${drink.strCategory}</p>
                </div>
            </div>
            `;
        displayResult.appendChild(div);
    });
};