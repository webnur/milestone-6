
const loadmeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {

    const mealContainer = document.getElementById('meal-conainer');
    mealContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
        </div>
        `;

        mealContainer.appendChild(mealDiv)
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadmeals(searchText)
}

const loadMealDetail = mealId => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    
}

const displayMealDetail = meal => {
    const mealDetail = document.getElementById('detail-container');
    console.log(meal)

    const detailDiv = document.createElement('div')
    detailDiv.classList.add('card')
    detailDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `;
    mealDetail.appendChild(detailDiv)

}
loadmeals('')