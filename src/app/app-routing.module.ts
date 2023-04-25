import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
// import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [

  {
    path: '', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
  },

  {
    path: 'signup', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) 
  },

  {
    path: '',
    component: BodyComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule) },
      { path: 'negative-chart', loadChildren: () => import('./pages/negative-chart/negative-chart.module').then(m => m.NegativeChartModule) },

    ]
  },



 
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
