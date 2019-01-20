import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
