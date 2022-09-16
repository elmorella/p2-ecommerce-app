import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AccountComponent } from './account/account.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserServiceTsService } from './data/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ProductPageComponent,
    AccountComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
