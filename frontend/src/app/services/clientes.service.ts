import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpApiService) {

  }

  crear(cliente: Cliente): Observable<any> {
    return this.http.post('clientes', cliente);
  }
}
