import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginReponse, TypeLoginRequest } from 'types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }
  login(data:TypeLoginRequest): Observable<TypeLoginReponse>{
    return this.http.post<TypeLoginReponse>(environment.login,data);
  }
}
