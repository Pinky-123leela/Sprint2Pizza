import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list1.component';
import { CustomerList1Component } from './admin/customer/customer-list1/customer-list1.component';
import { OrderList1Component } from './admin/order/order-list1.component';
import { AddCouponComponent } from './coupons/add-coupon.component';
import { CouponListComponent } from './coupons/coupon-list.component';
import { CouponComponent } from './coupons/coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-guard.service';
import {  AuthGuardService1 } from './service/auth-guard1.service';
//import { AddCustomerComponent } from './customers/add-customer.component';
//import { CustomerListComponent } from './customers/customer-list.component';
//import { CustomerComponent } from './customers/customer.component';
//import { EditCustomerComponent } from './customers/edit-customer.component';
 
const routes: Routes = [
  /* {path:'customers',component:CustomerListComponent},
  {path:'customers/:id',component:CustomerComponent},
  {path:'edit-customer/:id',component:EditCustomerComponent},
  {path:'add-customer',component:AddCustomerComponent}, */

  {path:'coupans',component:CouponListComponent},
  {path:'coupans/:id',component:CouponComponent},
  {path:'edit-coupan/:id',component:EditCouponComponent},
  {path:'add-coupan',component:AddCouponComponent},

  //{path:'coupans',component:CoupanListComponent},
  {path:'admin/coupans/:id',component:AdminComponent},
  //{path:'edit-coupan/:id',component:EditCoupanComponent},
  //{path:'admin',component:AdminComponent},
  {path:'admin/add-coupan',component:AdminCouponListComponent},

  {path:'admin/customers',component:CustomerList1Component,canActivate:[AuthGuardService1]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardService1]},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/logout',component:AdminLogoutComponent,canActivate:[AuthGuardService1]},
  {path:'admin/orders',component:OrderComponent}
  

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }