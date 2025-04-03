import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { ProductComponent } from './pages/product/product.component';

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
        path: 'product/:id',
        component: ProductComponent
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
