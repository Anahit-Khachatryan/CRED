import { Injectable } from '@angular/core';
import { users, User } from './databaseUser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUser(): Observable<User[]>{
    return of(users);
  }
  getOneUser(id):User{
    return users.find(u => u.id === id)
  }
  deleteUser(id){
    const i = users.findIndex(u => u.id == id);
    if(i !== -1){
      users.splice(i,1);
    }
  }
  saveUser(user){
    const foundIndex = users.findIndex(u => u.id == user.id);
    users[foundIndex] = user;
  }
}
