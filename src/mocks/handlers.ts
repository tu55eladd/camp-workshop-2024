import { http, HttpResponse } from 'msw'
import { BudgetInput, calculateResults, startingBudget} from "./budget";

let budget = startingBudget

export const handlers = [
    http.get('/budget', () => {
        return HttpResponse.json(budget)
    }),
    http.put('/budget',async ({ request }) => {
        const budgetInput = await request.json() as BudgetInput
        const newBudget = calculateResults(budgetInput)
        budget = newBudget
        return HttpResponse.json(newBudget)
    }),
]
