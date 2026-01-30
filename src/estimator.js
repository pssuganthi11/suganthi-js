const basePrice =0;
let totalCost = basePrice;

const totalEl = document.getElementById("total");
const pageTypeDivELEL = document.getElementById("pageType");
const featuresDiv = document.getElementById("features");

const pageTypes = [
  { name: "Static Page", price: 3000 },
  { name: "Dynamic Page", price: 7000 },
  { name: "CRM Application", price: 7000 },
];

const features = [
  { name: "Login System", price: 5000 },
  { name: "portfolio", price: 5000 },
  { name: "Payment Gateway", price: 8000 },
  { name: "Admin Dashboard", price: 7000 },
  { name: "Live Chat", price: 4000 },
  { name: "Need SEO ", price: 20000 },
  { name: "Need Hosting", price: 2000 },
  { name: "Need future Support", price: 20000 },
];

function createChip(item, container) {
  const chip = document.createElement("button");
  chip.className =
    "px-4 py-2 rounded-full bg-gray-700 hover:bg-orange-500 transition text-sm";
  chip.textContent = `${item.name}  (+₹${item.price})`;

  let selected = false;

  chip.onclick = () => {
    selected = !selected;
    chip.classList.toggle("bg-orange-500");

    totalCost += selected ? item.price : -item.price;
    totalEl.textContent = totalCost;
  };

  container.appendChild(chip);
}

pageTypes.forEach((type) => createChip(type, pageTypeDivELEL));
features.forEach((feature) => createChip(feature, featuresDiv));
