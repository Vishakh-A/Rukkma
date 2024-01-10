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
        // {path:'',redirectTo:'stock',pathMatch:'full'},
        {path:"stock",component:StockComponent,pathMatch:'full',
        children:[
          {path:'',component:TotalStockComponent},
          {path:'/admin/stock/addstock',component:AddStockComponent,pathMatch:'full'},
          {path:'editstock',component:EditStockComponent,pathMatch:'full'},
        ]},

    {path:"aproducts",component:AProductsComponent,
        children:[
          {path:'addproduct',component:AddProductComponent},
          {path:'listproduct',component:EditProductComponent},
          {path:'editproduct/:id',component:EditProductComponent},
          // {path:'editproduct/:id',component:EditProductComponent},
          {path:'offers',component:OffersComponent}
        ]},
    {path:'interface',component:InterfeceComponent,
          children:[
            {path:'aboutedit',component:AboutEditComponent},
            {path:'privacy',component:PrivacyPolicyComponent}
          ]},
    {path:'settings',component:SettingsComponent,
          children:[
            {path:'manageadmin',component:ManageAdminComponent},
            {path:'profile',component:ProfileComponent}
          ]},
    
]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
