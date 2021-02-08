fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(res => res.json())
    .then(data => displayFood(data.meals));

const displayFood = foods => {
    const foodsDiv = document.getElementById("foods");
    foods.forEach(eachFood => {
        const foodDiv = document.createElement("div");
        foodDiv.className = "food-items";
        const foodInfo = `
        <img src="${eachFood.strMealThumb}">
       <h3 class="food-name">${eachFood.strMeal}</h3>
       <button onclick = "displayFoodDetails('${eachFood.strMeal}')"> Click Here </button>
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
        foodDiv.className = "single-result row align-items-center my-3 p-3";
        foodDiv.innerHTML = `
        <div class="search-result">
        <img src="${foods.strMealThumb}">
        <h3 class = "foods-name"> ${foods.strMeal} </h3>
        <button class = "btn btn-success">Get Food</button>
        `
        foodContainer.appendChild(foodDiv);
    })
}