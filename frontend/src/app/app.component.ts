import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  user: User;

  constructor(private usersService: UsersService, private router: Router) {
    this.usersService.userObservable.subscribe(user => this.user = user);
    this.usersService.getSession().subscribe(session => {
      console.log(session)
    });
  }

  logout(ev) {
    // ev.preventDefault();
    this.usersService.logout();
    // this.router.navigate(['/']);
  }
}
