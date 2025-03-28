import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CarouselPageComponent } from './pages/carousel-page/carousel-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ListPageComponent
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
