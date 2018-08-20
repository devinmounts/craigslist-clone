import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { AdminComponent } from './admin/admin.component';


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
    },
    {
        path: 'admin',
        component: AdminComponent
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);