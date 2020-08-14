import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { CreditosService } from 'src/app/services/creditos.service';
import { Credito } from 'src/app/models/credito';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  forma: FormGroup;
  errors = [];
  user: User;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService, private creditosService: CreditosService) {
    this.forma = this.fb.group({
      cliente: ['', Validators.required],
      monto: ['', [Validators.required, Validators.max(50000), Validators.min(1)]],
      estado: ['0', Validators.required],
      terminos: ['', Validators.requiredTrue],
    })
  }

  ngOnInit(): void {
    this.usersService.userObservable.subscribe(user => this.user = user);
  }

  solicitar() {
    if (this.user.id) {
      this.forma.get('cliente').setValue(this.user.id);

      console.log(this.forma)
      if (this.forma.invalid) {
        Object.values(this.forma.controls).forEach(control => control.markAsTouched());
        return;
      }
      
      let credito: Credito = Object.assign({}, this.forma.value);
      this.creditosService.solicitar(credito).subscribe(
        data => {
          this.router.navigate(['/confirmacion']);
        },
        res => {
          console.warn(res.error)
          if (res.error && typeof(res.error) == 'object') {
            this.errors = Object.entries(res.error);
          }
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  esValido(nombreControl) {
    let control = this.forma.get(nombreControl);
    return control.invalid && control.touched;
  }

}
