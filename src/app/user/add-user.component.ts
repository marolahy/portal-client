import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User;

  constructor(private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert('User created successfully.');
        });
  }

}
