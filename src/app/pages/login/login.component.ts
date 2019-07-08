import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: String = "";
  submitted = false;
  data: any;

  loginForm = new FormGroup({

    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor( private Router: Router, private formBuilder: FormBuilder, private LoginService: LoginService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit(form: any){
   
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else if(this.loginForm.valid){
          this.LoginService.login(form).subscribe((data=>{
    
            this.data = data;
            if(this.data.status === 404 && this.data.data === "Error: Login Failed: Check Your Password"){
              this.errorMsg = "Login Failed, Check Your Password Please"
            } else if(this.data.status === 404 && this.data.data ==="Error: Login Failed: User Not Found"){
              this.errorMsg = "Login Failed, Check your email please"
            }
            else if(this.data.status == 200){
             
              this.Router.navigate(['/dashboard']); 
            }
            else{
              this.errorMsg = "Login Failed, Check your creadintal"
            }
          }))
        }
    
  }




}
