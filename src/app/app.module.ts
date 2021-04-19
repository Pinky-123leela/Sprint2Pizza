import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CouponListComponent } from './coupons/coupon-list.component';
import { CouponComponent } from './coupons/coupon.component';
import { AddCouponComponent } from './coupons/add-coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list1.component';

import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import { CustomerService } from './service/customer.service';
import { CustomerList1Component } from './admin/customer/customer-list1/customer-list1.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { OrderList1Component } from './admin/order/order-list1.component';
@NgModule({
  declarations: [
    AppComponent,
    CouponListComponent,
    CouponComponent,
    AddCouponComponent,
    EditCouponComponent,
    AdminComponent,
    AdminCouponListComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    CustomerList1Component,
    CustomerComponent,
    OrderComponent,
    OrderList1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [CustomerService,
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}