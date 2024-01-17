import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RootComponent } from './home/root/root.component';
import { LoginComponent } from './home/login/login.component';
import { AboutComponent } from './home/about/about.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductComponent } from './home/products/product/product.component';
import { InterfeceComponent } from './admin/interfece/interfece.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { ListProductComponent } from './admin/products/list-product/list-product.component';
import { OffersComponent } from './admin/products/offers/offers.component';
import { StockComponent } from './admin/stock/stock.component';
import { AddStockComponent } from './admin/stock/add-stock/add-stock.component';
import { EditStockComponent } from './admin/stock/edit-stock/edit-stock.component';
import { TotalStockComponent } from './admin/stock/total-stock/total-stock.component';
import { AboutEditComponent } from './admin/interfece/about-edit/about-edit.component';
import { PrivacyPolicyComponent } from './admin/interfece/privacy-policy/privacy-policy.component';
import { ManageAdminComponent } from './admin/settings/manage-admin/manage-admin.component';
import { ProfileComponent } from './admin/settings/profile/profile.component';
import { AProductsComponent } from './admin/products/products.component';
import { InterhomeComponent } from './admin/interfece/interhome/interhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './user/orders/orders.component';
import { CartComponent } from './user/cart/cart.component';
import { AddressComponent } from './user/address/address.component';
import { UserProfileComponent } from './user/profile/profile.component';
import { AddAddressComponent } from './user/address/add-address/add-address.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    RootComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent,
    InterfeceComponent,
    SettingsComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    OffersComponent,
    StockComponent,
    AddStockComponent,
    EditStockComponent,
    TotalStockComponent,
    AboutEditComponent,
    PrivacyPolicyComponent,
    ManageAdminComponent,
    ProfileComponent,
    AProductsComponent,
    InterhomeComponent,
    OrdersComponent,
    CartComponent,
    AddressComponent,
    UserProfileComponent,
    AddAddressComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
