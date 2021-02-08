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
    const foodDiv = document.getElementById("food-details");
    foodDiv.style.display = "block";
    foodDiv.innerHTML = `
    <img src="${foodDetail.strMealThumb}">
    <h1>${foodDetail.strMeal}</h1>
    <br>
    <h3> Ingredients </h3>
    <br>
    <p>${foodDetail.strMeasure1} ${foodDetail.strIngredient1}</p>
    <p>${foodDetail.strMeasure2} ${foodDetail.strIngredient2}</p>
    <p>${foodDetail.strMeasure3} ${foodDetail.strIngredient3}</p>
    <p>${foodDetail.strMeasure4} ${foodDetail.strIngredient4}</p>
    <p>${foodDetail.strMeasure5} ${foodDetail.strIngredient5}</p>
    <p>${foodDetail.strMeasure6} ${foodDetail.strIngredient6}</p>
    <p>${foodDetail.strMeasure7} ${foodDetail.strIngredient7}</p>
    <p>${foodDetail.strMeasure8} ${foodDetail.strIngredient8}</p>
    <p>${foodDetail.strMeasure9} ${foodDetail.strIngredient9}</p>
    <p>${foodDetail.strMeasure10} ${foodDetail.strIngredient10}</p>
    `;
}

const searchFoods = () => {
    const searchText = document.getElementById("search-input").value;
    document.getElementById("food-details").style.display = "none";
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
        <div onclick = "displayFoodDetails('${foods.strMeal}')">
        <div>
        <img src="${foods.strMealThumb}">
        </div>
        <div>
        <h3 class = "foods-name"> ${foods.strMeal} </h3>
        </div>
        </div>
        `
        foodContainer.appendChild(foodDiv);
    })
}