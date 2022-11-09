import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path : 'dashboard', component: DashboardComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'mycart', component: MycartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DashboardComponent, ProductsComponent, MycartComponent]
