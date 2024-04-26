export type Headers = [number, number, number, number, number, number, number, number, number, number, number, number]
export type Months = [number, number, number, number, number, number, number, number, number, number, number, number]

type RowType = 'income' | 'expense' | 'result'
type IncomeRow = ['income', ...Months]
type ExpenseRow = ['expense', ...Months]
type ResultRow = ['result', ...Months]

type BudgetRow = IncomeRow | ExpenseRow | ResultRow

export interface Budget {
    headers: []
    rows: BudgetRow[]
}

export type BudgetInput = Omit<Budget, 'result'>

export const startingBudget: Budget = {
    headers: [],
    rows: [
        ['income', 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150] as IncomeRow,
        ['expense', 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 800]
    ],
}

export const calculateResults = (newBudget: BudgetInput): Budget  => {
    return startingBudget
}