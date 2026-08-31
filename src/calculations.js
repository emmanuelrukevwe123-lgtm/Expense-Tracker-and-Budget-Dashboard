export const getTotals = (transactions) => {     // this function gets the totals of the transactions
    return transactions.reduce((totals, transaction) => {
        return transaction.type === 'income' ? {...totals, income: totals.income + transaction.amount}
        : {...totals, expense: totals.expense + transaction.amount};
    }, {income: 0, expense: 0});
}


export const getSummary = (transactions) => {   // this gets the Summary of the transactions
    const summary = getTotals(transactions);
    const { income, expense } = summary;
    const balance = income - expense;
    return { income, expense, balance };
}

export const getCategoryTotals = (transactions) => {
           return transactions.reduce((categoryTotals, transaction) => {
            if (transaction.type === 'income') return categoryTotals;
        const currentTotal = categoryTotals[transaction.category]  || 0;
        return {...categoryTotals, [transaction.category]: currentTotal + transaction.amount }
    },{});
}