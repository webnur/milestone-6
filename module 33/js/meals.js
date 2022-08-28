
const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res => res.json())
    .then(data => displayMeals(data))
}




const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal =>{
       console.log(meal)
    })
}

loadMeals()