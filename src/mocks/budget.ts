export type Months = [number, number, number, number, number, number, number, number, number, number, number, number]

type RowName = string
type Summary = number
type RowType = 'income' | 'expense' | 'result'
type IncomeRow = ['income', RowName, ...Months, Summary]
type ExpenseRow = ['expense', RowName, ...Months, Summary]
type ResultRow = ['result', RowName, ...Months, Summary]

export type BudgetRow = IncomeRow | ExpenseRow | ResultRow

export interface Budget {
    rows: BudgetRow[]
}

export type BudgetInput = Omit<Budget, 'result'>

export const startingBudget: Budget = {
    rows: [
        ['income', 'Rent', 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 1800] as IncomeRow,
        ['expense', 'CableTV', 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 800, 1050],
        ['expense', 'Trappevask', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1200]
    ],
}

export const calculateResults = (newBudget: Budget): Budget  => {
    // Calculate yearly result
    const budgetWithSummarizedRows = newBudget.rows.map(row => summarizeRow(row))
    // Add bottom row with summary of all rows
    return {
        rows: [
            ...newBudget.rows,
            summarizeNetIncome(budgetWithSummarizedRows)
        ]
    }
}

const summarizeRow = (row: BudgetRow): BudgetRow => {
    const [type, name, ...numbers ] = row
    const yearlyResult = numbers.reduce((total, next) => total + next, 0)
    return [type, name, ...numbers.slice(0, -1), yearlyResult] as BudgetRow
}

const summarizeNetIncome = (budget: BudgetRow[]): BudgetRow => {
    const expenses = budget.filter(row => row[0] === 'expense')
    const allExpenses = zip(expenses)
        .map(summarizeBudgetRows)
    const income = budget.filter(row => row[0] === 'income')
    const allIncome = zip(income)
        .map(summarizeBudgetRows)
    return zip([allExpenses, allIncome]).map(summarizeBudgetRows)
}

const summarizeBudgetRows = (expenseCol, index) => {
    if (index === 0) return 'Summary'
    if (index === 1) return 'Summary'
    return expenseCol.reduce((total, next) => total + next, 0)
}

function zip<T>(arrays: T[][]) {
    return arrays[0].map((_,i) => {
        return arrays.map((array) => array[i])
    });
}