import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor( private http: HttpClient ) { }

  configUrl = 'http://localhost:3000/users/login';

  login(data: any) {
    
    return this.http.post(this.configUrl, data);
  }

}