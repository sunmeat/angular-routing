import { Routes } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';

export const routes: Routes = [
    { path: 'products', component: CardsContainerComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
];