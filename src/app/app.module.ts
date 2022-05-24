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
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // FormsModule duoc su dung o cac component da co ben tren
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
