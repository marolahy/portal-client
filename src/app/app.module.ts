import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './user/add-user.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {CustomMaterialModule} from './custom-material.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
