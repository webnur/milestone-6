
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}




const displayMeals = meals => {
    // const {meals} = data;
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal =>{

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a short card.</p>
            </div>
        </div>
        
        `;
        mealsContainer.appendChild(mealDiv)
       console.log(meal)

       
    })

}

loadMeals()