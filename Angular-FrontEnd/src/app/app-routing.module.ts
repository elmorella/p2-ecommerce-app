import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component'
import { ProductPageComponent } from './components/body/product-page.component'
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'testingDetail', component: DetailPageComponent },
  { path: 'testingCart', component: ShoppingCartComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'item/:id', component: DetailPageComponent },
  { path: 'cart', component: ShoppingCartComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'orderHistory', component: OrderHistoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomePageComponent,
  LoginComponent,
  NavbarComponent,
  HeaderComponent,
  ProductPageComponent,
  DetailPageComponent,
  ShoppingCartComponent,
  ProfilePageComponent,
  OrderHistoryComponent
]
