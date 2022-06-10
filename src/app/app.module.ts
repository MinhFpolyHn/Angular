import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { StatusComponent } from './table/status/status.component';
import { AvatarComponent } from './table/avatar/avatar.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { FormsModule } from '@angular/forms';
// ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layouts/client-layout/header/header.component';
import { BannerComponent } from './layouts/client-layout/banner/banner.component';
import { ContentComponent } from './layouts/client-layout/content/content.component';
import { FooterComponent } from './layouts/client-layout/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    NameComponent,
    IdentityComponent,
    TableGenderComponent,
    StatusComponent,
    AvatarComponent,
    TableNameComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent,
    HomeComponent,
    LayoutsComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    FormsModule, // FormsModule được sử dụng ở các component đã có bên trên
    ReactiveFormsModule,

    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
