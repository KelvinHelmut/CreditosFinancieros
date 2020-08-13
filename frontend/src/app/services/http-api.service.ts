import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  URL_API: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {

  }

  get(uri) {
    return this.http.get(`${this.URL_API}/${uri}/`);
  }

  post(uri, data) {
    return this.http.post(`${this.URL_API}/${uri}/`, data);
  }

  put(uri, data) {
    return this.http.put(`${this.URL_API}/${uri}/`, data);
  }

  delete(uri) {
    return this.http.delete(`${this.URL_API}/${uri}/`);
  }
}
