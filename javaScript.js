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