import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './adduser/add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component'
import { EditInfoComponent } from './edit-info/edit-info.component';


const appRoutes: Routes =[
  {path:'add', component: AddUserComponent},
  {path:'userlist', component: UserListComponent},
  {path:'user/:id', component: UserDetailsComponent},
  {path:'edit/:id', component: EditInfoComponent},
  {path: '', redirectTo:'/userlist', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
  ];
  
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
