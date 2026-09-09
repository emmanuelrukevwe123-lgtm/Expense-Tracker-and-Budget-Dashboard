import {
  getSummary,
  getCategoryTotals,
  getVisibleTransactions,
} from "./calculations.js";
import { formatCurrency } from "./utils.js";

const renderControls = (state) => {
  document.getElementById("filter").value = state.filter;
  document.getElementById("sort").value = state.sort;
};

const renderTransactions = (state) => {
  const container = document.getElementById("transaction-list");
  const emptyMessage = document.getElementById("transactions-empty");
  const visible = getVisibleTransactions(state);

  container.replaceChildren();
  emptyMessage.hidden = visible.length > 0;

  visible.forEach((transaction) => {
    const li = document.createElement("li");
    li.textContent = `${transaction.label} - ${formatCurrency(transaction.amount)}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = transaction.id;

    li.appendChild(deleteBtn);
    container.appendChild(li);
  });
};

const renderSummary = (state) => {
  const summary = getSummary(state.transactions);

  document.getElementById("total-balance").textContent = formatCurrency(
    summary.balance,
  );
  document.getElementById("total-income").textContent = formatCurrency(
    summary.income,
  );
  document.getElementById("total-expense").textContent = formatCurrency(
    summary.expense,
  );
};

const renderCategoryBreakdown = (state) => {
  const container = document.getElementById("category-breakdown");
  const emptyMessage = document.getElementById("breakdown-empty");
  const categoryTotals = Object.entries(getCategoryTotals(state.transactions));

  container.replaceChildren();
  emptyMessage.hidden = categoryTotals.length > 0;

  categoryTotals.forEach(([category, total]) => {
    const li = document.createElement("li");
    li.textContent = `${category}: ${formatCurrency(total)}`;
    container.appendChild(li);
  });
};

export const render = (state) => {
  renderControls(state);
  renderTransactions(state);
  renderSummary(state);
  renderCategoryBreakdown(state);
};
