import { UserService } from './../user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() userData;
// @Output() OnDelete = new EventEmitter();
@Output() OnSentUserNewInfo = new EventEmitter();
@Output() OnView = new EventEmitter();
confirmDelete = false;
  constructor(private service:UserService) { 
  }

  ngOnInit() {
  }
  // removeUser(){
  
  //   this.OnDelete.emit(this.userData);
  // }
  editUser(){
    console.log(this.userData);
    this.OnSentUserNewInfo.emit(this.userData);
  }
  view(){
    this.OnView.emit(this.userData.id);
  }
  removeUser(){
   this.service.deleteUser(this.userData.id);
  //  console.log(this.userData.id);
  //  console.log(this.service.deleteUser)
  }
}
