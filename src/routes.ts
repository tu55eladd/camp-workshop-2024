import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';
import {BudgetData} from "./resources/regnskap.data";

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
    data: BudgetData
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
