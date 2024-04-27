import type { RouteDataFunc } from "@solidjs/router";
import {createResource, Resource} from "solid-js";
import {Budget} from "../mocks/budget";

export const fetchBudget = async () => {
    return fetch(`/budget` , {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(it => {
            return it.json()
        })
}

export const BudgetData: RouteDataFunc<never, Resource<Budget>> = () => {
    const [data] = createResource(fetchBudget);
    return data;
};
export type BudgetDataType = typeof BudgetData;