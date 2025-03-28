import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { CardsListComponent } from './pages/cards-list/cards-list.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ListPageComponent
    },
    {
        path: 'product',
        component: CardsListComponent
    },
    {
        path: 'carousel',
        component: CarouselPageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
