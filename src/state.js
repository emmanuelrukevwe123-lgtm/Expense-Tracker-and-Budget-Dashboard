export const state = {
    transactions: [
        {id: crypto.randomUUID(), label: 'Salary', amount: 3200, type: 'income', category: 'income', date: '2026-08-01' },
        {id: crypto.randomUUID(), label: 'Rent', amount: 1200, type: 'expense', category: 'housing', date: '2026-08-04' },
        {id: crypto.randomUUID(), label: 'Groceries', amount: 300, type: 'expense', category: 'groceries', date: '2026-08-06' },
        {id: crypto.randomUUID(), label: 'Utilities', amount: 150, type: 'expense', category: 'utilities', date: '2026-07-05' },
        {id: crypto.randomUUID(), label: 'Entertainment', amount: 100, type: 'expense', category: 'entertainment', date: '2026-07-09' },
        {id: crypto.randomUUID(), label: 'Freelance Gig', amount: 1000, type: 'income', category: 'income', date: '2026-07-20' }
    ], // An object with a list of transactions, each with an id, label, amount, type (income or expense), category, and date
filter: null,
sort: null, 
}; 

