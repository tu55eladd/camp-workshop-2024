import {delay, http, HttpResponse} from 'msw'
import { BudgetInput, calculateResults, startingBudget} from "./budget";

let budget = startingBudget

export const handlers = [
    http.get(`/budget`, async () => {
        await delay(500)
        return HttpResponse.json(budget)
    }),
    http.put(`/budget`,async ({ request }) => {
        await delay(1000)
        const budgetInput = await request.json() as BudgetInput
        const newBudget = calculateResults(budgetInput)
        budget = newBudget
        return HttpResponse.json(newBudget)
    }),
]
