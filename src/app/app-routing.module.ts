import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:RestaurantListComponent},
  {path:'restaurant-list',component:RestaurantListComponent},
  {path: 'food/:id', component:FoodPageComponent},
  {path: 'cart-page', component:CartPageComponent},
  {path: 'restaurant/:id', component: RestaurantDetailsComponent},
  {path: 'checkout', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
