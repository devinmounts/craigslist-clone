import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    },
    {
        path: 'community/:id',
        component: DetailsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'services/:id',
        component: ServicesDetailsComponent
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);