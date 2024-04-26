import type { RouteDataFunc } from "@solidjs/router";
import { createResource, Resource } from "solid-js";
import {Budget} from "../mocks/budget";

export const fetchBudget = () => {
    return fetch("/budget", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(it => {
            // if (!it.ok) throw Error("NONON")
            return it.json()
        })
        // .then((payload) => {
        //     return payload
        // })
}

export const BudgetData: RouteDataFunc<never, Resource<Budget>> = () => {
    const [data] = createResource(fetchBudget);

    return data;
};
export type BudgetDataType = typeof BudgetData;