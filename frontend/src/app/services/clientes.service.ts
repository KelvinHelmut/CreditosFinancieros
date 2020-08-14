import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { UsersService } from './users.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpApiService, private usersService: UsersService) {

  }

  crear(cliente: Cliente): Observable<any> {
    return this.http.post('clientes', cliente).pipe(
      concatMap((res: any) => {
        let user: User = Object.assign({}, res);
        user.password = cliente.password;
        return this.usersService.login(user);
      })
    );
  }
}
