fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(res => res.json())
    .then(data => displayFood(data.meals));

const displayFood = foods => {
    const foodsDiv = document.getElementById("foods");
    foods.forEach(eachFood => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "food-items";
        const foodInfo = `
        <div onclick = "displayFoodDetails('${eachFood.strMeal}')">
        <img src="${eachFood.strMealThumb}">
       <h3 class="food-name">${eachFood.strMeal}</h3>
       </div>
       `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}
const displayFoodDetails = recipe => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodDetail(data.meals[0]));
}

const renderFoodDetail = foodDetail =>{
    const foodDiv = document.getElementById("food-detail");
    foodDiv.innerHTML = `
    <h1>${foodDetail.strMeal}</h1>
    <p>${foodDetail.strInstructions}</p>
    `;
}

const searchFoods = () => {
    const searchText = document.getElementById("search-input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchedFood(data.meals))
}
const displaySearchedFood = foods => {
    const foodContainer = document.getElementById("search-food");

    foods.forEach(foods => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "single-result row align-items-center my-3 p-3 search-result";
        foodDiv.innerHTML = `
        <div>
        <img src="${foods.strMealThumb}">
        </div>
        <div>
        <h3 class = "foods-name"> ${foods.strMeal} </h3>
        </div>
        `
        foodContainer.appendChild(foodDiv);
    })
}