import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RootComponent } from './home/root/root.component';
import { AboutComponent } from './home/about/about.component';
import { LoginComponent } from './home/login/login.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductComponent } from './home/products/product/product.component';
import { StockComponent } from './admin/stock/stock.component';
import { AProductsComponent } from './admin/products/products.component';
import { InterfeceComponent } from './admin/interfece/interfece.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { AddProductComponent } from './admin/products/add-product/add-product.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { OffersComponent } from './admin/products/offers/offers.component';
import { AboutEditComponent } from './admin/interfece/about-edit/about-edit.component';
import { PrivacyPolicyComponent } from './admin/interfece/privacy-policy/privacy-policy.component';
import { ManageAdminComponent } from './admin/settings/manage-admin/manage-admin.component';
import { ProfileComponent } from './admin/settings/profile/profile.component';
import { AddStockComponent } from './admin/stock/add-stock/add-stock.component';
import { EditStockComponent } from './admin/stock/edit-stock/edit-stock.component';
import { TotalStockComponent } from './admin/stock/total-stock/total-stock.component';
import { ListProductComponent } from './admin/products/list-product/list-product.component';
import { InterhomeComponent } from './admin/interfece/interhome/interhome.component';

const routes: Routes = [
  // home components
  {path:'',component:HomeComponent,
        children:[
          {path:'',component:RootComponent},
          {path:'about',component:AboutComponent},
          {path:'login',component:LoginComponent},
          {path:'products',component:ProductsComponent},
          {path:'product/:id',component:ProductComponent}
        ]
  },
  // admin Components
  {path:'admin',component:AdminComponent,
  children:[
        {path:'',redirectTo:'stock',pathMatch:'full'},
        {path:"stock",component:StockComponent,
        children:[
          {path:'',redirectTo:'total-stock',pathMatch:'full'},
          {path:'total-stock',component:TotalStockComponent},
          {path:'addstock',component:AddStockComponent},
          {path:'editstock',component:EditStockComponent},
        ]},

    {path:"aproducts",component:AProductsComponent,
        children:[
          {path:'',redirectTo:'listproduct',pathMatch:'full'},
          {path:'addproduct',component:AddProductComponent},
          {path:'listproduct',component:ListProductComponent},
          {path:'editproduct/:id',component:EditProductComponent},
          // {path:'editproduct/:id',component:EditProductComponent},
          {path:'offers',component:OffersComponent}
        ]},
    {path:'interface',component:InterfeceComponent,
          children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:InterhomeComponent},
            {path:'about',component:AboutEditComponent},
            {path:'privacy',component:PrivacyPolicyComponent}
          ]},
    {path:'settings',component:SettingsComponent,
          children:[
            {path:'',redirectTo:'profile',pathMatch:'full'},
            {path:'profile',component:ProfileComponent},
            {path:'manageadmin',component:ManageAdminComponent},
          ]},
    
]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
