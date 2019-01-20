import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {UseraddComponent} from './components/useradd/useradd.component';
import {UsernoteComponent} from './components/usernote/usernote.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'useradd', component: UseraddComponent},
  { path: 'usernote', component: UsernoteComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
