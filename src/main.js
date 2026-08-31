import { render } from "./render.js";
import { state } from "./state.js";
import { store } from "./storage.js";

let currentState = state;
render(currentState);
const form = document.getElementById("add-transaction");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const description = data.get("description");
  const amount = data.get("amount");
  const date = data.get("date");
  const type = data.get("type");
  const category = data.get("category");

  const newTransaction = {
    id: crypto.randomUUID(),
    label: description,
    amount: parseFloat(amount),
    type: type,
    category: category,
    date: date,
  };

  currentState = {
    ...currentState,
    transactions: [...currentState.transactions, newTransaction],
  };
  render(currentState);
  form.reset();
});
