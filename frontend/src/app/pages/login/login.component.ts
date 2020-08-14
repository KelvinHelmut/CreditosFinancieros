import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  errors = [];

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {
    this.forma = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => control.markAsTouched());
      return;
    }

    let user: User = Object.assign({}, this.forma.value);
    this.usersService.login(user).subscribe(
      data => {
        user = Object.assign({}, data.user);
        if (user.is_staff) {
          this.router.navigate(['/creditos']);
        } else {
          this.router.navigate(['/']);
        }
      },
      res => {
        console.warn(res.error)
        if (res.error && typeof(res.error) == 'object') {
          this.errors = Object.entries(res.error);
        }
      }
    );
  }

  esValido(nombreControl) {
    let control = this.forma.get(nombreControl);
    return control.invalid && control.touched;
  }
}
