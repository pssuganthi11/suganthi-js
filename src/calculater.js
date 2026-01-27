const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let value = "";

function updateDisplay(text) {
  display.textContent = text || "0";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    const action = btn.dataset.action;
    const operator = btn.dataset.operator;

    if (number) {
      value += number;
      updateDisplay(value);
      return;
    }

    if (operator) {
      value += operator;
      updateDisplay(value);
      return;
    }

    if (action === "clear") {
      value = "";
      updateDisplay("0");
    }

    if (action === "delete") {
      value = value.slice(0, -1);
      updateDisplay(value);
    }

    if (action === "percent") {
      if (!value) return;
      value = String(parseFloat(value) / 100);
      updateDisplay(value);
    }

    if (action === "equals") {
      try {
        value = String(eval(value));
        updateDisplay(value);
      } catch {
        updateDisplay("Error");
        value = "";
      }
    }

    if (action === "age") {
      if (value.length !== 4) {
        updateDisplay("Enter Year");
        value = "";
        return;
      }

      const age = new Date().getFullYear() - Number(value);
      updateDisplay(`Age: ${age}`);
      value = "";
    }
  });
});
