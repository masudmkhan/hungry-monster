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
       <button onclick = "displayFoodDetails('${eachFood.strMealThumb}')"> Click Here </button>
       `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}
const displayFoodDetails = name => {
    console.log(name);
}

const searchedFood = name => {
    const searchInput = document.getElementById("search-input").value;

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput)
    .then(res => res.json())
    .then(data => displayFood(data.meals));
}