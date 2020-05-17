import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from '@presentation/feature/container-app/container-app.component';
import { HomeComponent } from '@presentation/feature/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'customers',
        loadChildren: () => import('@presentation/feature/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('@presentation/feature/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('@presentation/feature/login/login.component.module').then(m => m.LoginModule),
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // preloadingStrategy: PreloadAllModules  // Permite pre cargar todos los modulos (No LazyLoading)
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
