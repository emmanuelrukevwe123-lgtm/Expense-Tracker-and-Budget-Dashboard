import { getSummary, getCategoryTotals} from "./calculations.js";

export const render = (state) => {
    const container = document.getElementById('transaction-list');
    container.replaceChildren(); // Clear the container before rendering new transactions

    state.transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = `${transaction.label} - ${transaction.amount}`; // 
    container.appendChild(li);     
    });
    const summary = getSummary(state.transactions)
    const balanceEl = document.getElementById('total-balance');
    const incomeEl = document.getElementById('total-income');
    const expenseEl = document.getElementById('total-expense');

    balanceEl.textContent = summary.balance;
    incomeEl.textContent = summary.income;
    expenseEl.textContent = summary.expense;

    const summaryBreakdown = document.getElementById('category-breakdown');
    summaryBreakdown.replaceChildren();
    Object.entries(getCategoryTotals(state.transactions)).forEach(([category, total]) => {
        const li = document.createElement('li')
        li.textContent = `${category}: ${total}` ;
        summaryBreakdown.appendChild(li);
    })
}



    

