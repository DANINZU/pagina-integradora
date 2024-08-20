// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsRegisterComponent } from './components/products-register/products-register.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UserFormComponent } from './components/user-form/user-form.component'; // Actualiza la ruta aquí

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirige a home por defecto
  { path: 'home', component: HomeComponent },
  { path: 'products-register', component: ProductsRegisterComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'forms', component: UserFormComponent } // Ruta para UserFormComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
