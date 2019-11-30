import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  @ViewChild('userForm',{static:true}) user;
  id: number;
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
   console.log(this.user);
     this.id = +this.route.snapshot.params['id'],
     console.log(this.route)
   this.route.params.subscribe((params)=>{
     console.log(this.route.params)
    this.id = +params['id'];
    this.user = Object.assign({},this.userService.getOneUser(this.id));
   console.log(this.user)
  })
    
    }
    onSubmit(){
      console.log(this.user)
      const newUser = Object.assign({},this.user);
      this.userService.saveUser(newUser);
      this.router.navigate(['/userlist'])
      this.user.reset();
    }
}
