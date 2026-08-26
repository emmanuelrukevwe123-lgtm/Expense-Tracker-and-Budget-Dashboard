export const render = (state) => {
    const container = document.getElementById('transaction-list');
    container.replaceChildren(); // Clear the container before rendering new transactions


    state.transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = `${transaction.label} - ${transaction.amount}`; // 
    container.appendChild(li);     
    });
    
}