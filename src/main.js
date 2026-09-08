import { render } from "./render.js";
import { state } from "./state.js";
import { loadState, saveState } from "./storage.js";
import { makeId } from "./utils.js";

let currentState = loadState() || state;
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
    id: makeId(),
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
  saveState(currentState);
  render(currentState);
  form.reset();
});

const removeTransaction = document.getElementById("transaction-list");
removeTransaction.addEventListener("click", (event) => {
  const deleteTransaction = event.target.dataset.id;
  if (!deleteTransaction) return;
  currentState = {
    ...currentState,
    transactions: currentState.transactions.filter(
      (transaction) => transaction.id !== deleteTransaction,
    ),
  };
  render(currentState);
  saveState(currentState);
});
