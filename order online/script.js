const foods = [
  { name: "Vegetarian Pizza", category: "Vegetarian", description: "Delicious vegetarian pizza with fresh toppings.", image:"images/vegepizza.jpg" },
  { name: "Chicken Biryani", category: "Non-Vegetarian", description: "Spicy and flavorful chicken biryani.", image:"images/chickenbriyani.jpg" },
  { name: "Chocolate Cake", category: "Desserts", description: "Rich chocolate cake with creamy icing.", image: "images/choccake.jpg" },
  { name: "Vegetable Burger", category: "Vegetarian", description: "Healthy vegetable burger with a crunchy patty.", image: "images/vegeburger.jpg" },
  { name: "Fish Curry", category: "Non-Vegetarian", description: "Tasty fish curry with spices.", image: "images/fishcury.jpg" },
  { name: "Ice Cream", category: "Desserts", description: "Cool and creamy vanilla ice cream.", image: "images/icecream.jpg" },
  { name: "Mutton Briyani", category: "Non-Vegetarian", description: "Spicy and flavorful mutton briyani.", image: "images/muttonbriyani.jpg" }
];

let filteredFoods = foods;

function displayFoods(foods) {
  const foodList = document.getElementById("food-list");
  foodList.innerHTML = ""; // Clear the food list

  foods.forEach(food => {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    foodItem.innerHTML = `
      <img src="${food.image}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.description}</p>
    `;

    foodList.appendChild(foodItem);
  });
}

function filterFoods() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  filteredFoods = foods.filter(food => food.name.toLowerCase().includes(searchTerm));
  displayFoods(filteredFoods);
}

function filterByCategory(category) {
  if (category === "All") {
    filteredFoods = foods;
  } else {
    filteredFoods = foods.filter(food => food.category === category);
  }
  displayFoods(filteredFoods);
}

// Initial display of foods
displayFoods(filteredFoods);
