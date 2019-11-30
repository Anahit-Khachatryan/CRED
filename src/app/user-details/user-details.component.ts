import { User } from './../databaseUser';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:User;
private id;
  constructor(private route:ActivatedRoute, private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
     this.id = +params['id'];
     this.user =this.userService.getOneUser(this.id);

   })
  }
  viewNextUser(){
    if(this.id < 6){
      this.id = this.id +1;
    }else{
      this.id = 1;
    }
   console.log(this.id);
   this.router.navigate(['/user',this.id])
   return this.userService.getOneUser(this.id);

  }
}
