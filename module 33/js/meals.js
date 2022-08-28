
const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}




const displayMeals = meals => {
    // const {meals} = data;
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``
    meals.forEach(meal =>{

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv)
    //    console.log(meal)

       
    })

}



const  searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadMeals(searchText)
    searchField.value = ''
}

const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))
}

const displayMealsDetails = meal => {
    console.log(meal)
    const detailContainer = document.getElementById('detail-container')
    detailContainer.innerHTML = ``;
    
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div> 
    `;

    detailContainer.appendChild(mealDiv)

    
    
    

}
loadMeals('')