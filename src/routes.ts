import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import {BudgetData} from "./resources/budget.data";

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
    data: BudgetData
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
