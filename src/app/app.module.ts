import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CustomerListComponent } from './customers/customer-list.component';
//import { CustomerComponent } from './customers/customer.component';
//import { AddCustomerComponent } from './customers/add-customer.component';
//import { EditCustomerComponent } from './customers/edit-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CouponListComponent } from './coupons/coupon-list.component';
import { CouponComponent } from './coupons/coupon.component';
import { AddCouponComponent } from './coupons/add-coupon.component';
import { EditCouponComponent } from './coupons/edit-coupon.component';
//import { PizzaListComponent } from './admin/pizza/pizza-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCouponListComponent } from './admin/coupon/coupon-list1.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { AdminLoginComponent } from './login/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminLogoutComponent } from './logout/adminlogout.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import { CustomerService } from './service/customer.service';
@NgModule({
  declarations: [
    AppComponent,
    //CustomerListComponent,
    //CustomerComponent,
    //AddCustomerComponent,
    //EditCustomerComponent,
    CouponListComponent,
    CouponComponent,
    AddCouponComponent,
    EditCouponComponent,
    //PizzaListComponent,
    AdminComponent,
    AdminCouponListComponent,
    //CustomerListComponent
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminLogoutComponent
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