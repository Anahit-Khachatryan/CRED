import { User, users } from './../databaseUser';
import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  User: User[] ;
  selectedUser;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    // this.User = this.userService.getUser();
    this.userService.getUser().subscribe(users => this.User = users)
  }
  
  editInfo(data){
    // console.log(data);
    this.selectedUser = data;
    this.router.navigate(['/edit', data.id])

  }
  viewUser(userId: number){
   this.router.navigate(['/user',userId]);
  }
}
