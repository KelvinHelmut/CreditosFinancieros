import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  forma: FormGroup;
  errors = [];

  constructor(private fb: FormBuilder, private router: Router, private clientesService: ClientesService) {
    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      celular: ['', ],
      direccion: ['', ],
      correo: ['', ],
      contrasenia: ['', Validators.required],
      contrasenia2: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    console.log(this.forma)

    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => control.markAsTouched());
      return;
    }

    let cliente: Cliente = Object.assign({}, this.forma.value);
    cliente.password = this.forma.get('contrasenia').value;
    this.clientesService.crear(cliente).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/']);
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
