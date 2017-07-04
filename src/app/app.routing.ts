import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompOneComponent } from './components/compOne/compOne.component';
import { CompTwoComponent } from './components/compTwo/compTwo.component';
import { DefaultComponent } from './components/default/default.component';


const appRoutes: Routes = [
    { path: 'comp1', component: CompOneComponent },
    { path: 'comp2', component: CompTwoComponent },
    { path: '', redirectTo: '/comp1', pathMatch: 'full' },
    { path: '**', component: DefaultComponent }
];

export const appRoutingProviders: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);