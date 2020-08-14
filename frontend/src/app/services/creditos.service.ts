import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditosService {
  creditoSolicitado: Credito;

  constructor(private http: HttpApiService) {

  }

  solicitar(credito: Credito): Observable<any> {
    return this.http.post('creditos', credito).pipe(
      map((res: any) => {
        this.creditoSolicitado = res;
        return res;
      })
    );
  }
}
