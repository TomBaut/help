import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { UseraddComponent } from './components/useradd/useradd.component';
import { UsernoteComponent } from './components/usernote/usernote.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent,
    AdminComponent,
    UseraddComponent,
    UsernoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
