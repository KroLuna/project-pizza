// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("Please enter your name:");
alert(`Hi, ${userName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(`Select food:
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice:`);

let selectedFood = "";

if (foodChoice === "1") {
    selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
} else {
alert("Invalid choice. Please select a valid number");
process.exit(1);
}

alert(`You have chosen ${selectedFood}`);

// Step 3 - Subtype choice
// Your code goes here
let chosenFood = "";
let foodNames = "";


switch (selectedFood) {
  case "Pizza":
    chosenFood = prompt(`Select a pizza you'd like to order:
    1 - Margarita
    2 - Peperoni
    3 - Vegetarian
    Please enter the number for your choice:`);
    foodNames = ["Margarita", "Peperoni", "Vegetarian"];
    break;
  case "Pasta":
    chosenFood = prompt(`Select a pasta you'd like to order:
    1 - Tortellini Funghi
    2 - Gnocchi a la Blue Cheese
    3 - Spaghetti Roso
    Please enter the number of your choice:`);
    foodNames = ["Tortellini Funghi", "Gnocchi a la Blue Cheese", "Spaghetti Roso"];
    break;
  case "Salad":
    chosenFood = prompt(`Select a salad you'd like to order:
    1 - Ceasar Salad
    2 - Greek salad 
    3 - Waldorf Salad
    Please enter the number of your choice:`);
    foodNames = ["Ceasar Salad", "Greek Salad", "Waldorf Salad"];
    break;
  
    default:
    alert("Invalid choice.");
    process.exit(1);
  }

  
  if (chosenFood === "1") {
    alert(
      `Great Choice, You've order a ${foodNames[0]}!`
    );
  } else if (chosenFood === "2") {
    alert(
      `Great Choice, You've order a ${foodNames[1]}!`
    );
  } else if (chosenFood === "3") {
    alert(
      `Great Choice, You've order a ${foodNames[2]}!`
    );
  }


// Step 4 - Age
// Your code goes here
let age = prompt(`Is the food intended for a child or an adult?
1 - Adult
2 - Child
Please enter the number for your choice:`);

 let selectedAge = "";
let cost = "0";

if (age === "1") {
    selectedAge = "Adult";
    cost = "10";
} else if (age === "2") {
  selectedAge = "Child";
  cost = "7";
} else {
alert("Invalid choice. Please select a valid number");
process.exit(1);
}

alert(`You have chosen ${selectedAge} and the cost is ${cost} euros.`);


let confir = prompt(`Do you confirmed your order?
1 - Yes
2 - No
Please enter your number of choice.`)

let selectedConfir = "";

if (confir === "1") {
  alert(
    `Thank you for your order, your meal is being prepared!`
  );
} else if (confir === "2") {
  alert(
    `Thank for your time, you are welcome to come back!`
  );
} else {
  alert("Invalid choice. Please select a valid number");
  process.exit(1);
  }


// Step 5 - Order confirmation
// Your code goes here
