

const listlementEl = document.getElementById("listelement");

// console.log(listlementEl.innerHTML);

// const listheadEl = document.getElementById("listhead");

// console.log(listheadEl.innerHTML ,"innerHTML");
// console.log(listheadEl.innerText,"innerText");
// console.log(listheadEl.textContent,"textContent");

//array with 50 products

const product = [
  "Pizza",
  "Burger",
  "Sandwich",
  "Pasta",
  "Noodles",
  "Fried Rice",
  "Biryani",
  "Paneer Butter Masala",
  "Chicken Curry",
  "Fish Fry",
  "French Fries",
  "Spring Roll",
  "Samosa",
  "Pav Bhaji",
  "Masala Dosa",
  "Idli",
  "Vada",
  "Upma",
  "Poha",
  "Aloo Paratha",
  "Chole Bhature",
  "Rajma Rice",
  "Dal Tadka",
  "Veg Pulao",
  "Jeera Rice",
  "Butter Naan",
  "Plain Roti",
  "Tandoori Chicken",
  "Chicken Biryani",
  "Mutton Curry",
  "Egg Curry",
  "Omelette",
  "Grilled Sandwich",
  "Cheese Pizza",
  "Veg Burger",
  "Chocolate Cake",
  "Ice Cream",
  "Gulab Jamun",
  "Rasgulla",
  "Fruit Salad",
  "Veg Soup",
  "Tomato Soup",
  "Sweet Corn",
  "Popcorn",
  "Pancakes",
  "Waffles",
  "Milkshake",
  "Cold Coffee"
];


//create fragments
const productFragment = document.createDocumentFragment()

//looping the product

for(let i=0 ;i<product.length;i++){
  const li = document.createElement('li');
  li.textContent = product[i];
  li.className = "products";
  productFragment.append(li);
}

//append fragmentcontent  in list

listlementEl.append(productFragment);
console.dir(listlementEl);
