import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }


  configUrl = 'http://localhost:3000/users/signUp';
  

  signUp(data: any) {
    return this.http.post(this.configUrl, data);
  }

 
 
}