import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { CreditosService } from 'src/app/services/creditos.service';
import { Credito } from 'src/app/models/credito';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  user: User;
  credito: Credito;

  constructor(private usersService: UsersService, private creditosService: CreditosService) { }

  ngOnInit(): void {
    this.user = this.usersService.user;
    this.credito = this.creditosService.creditoSolicitado;
  }

}
