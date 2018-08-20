import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'community',
        component: CommunityComponent
    }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);