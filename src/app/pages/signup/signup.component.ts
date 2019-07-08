import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

import { SignupService } from '../../services/signup/signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg: String = "";
  submitted = false;
  data: any;
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private Router: Router, private formBuilder: FormBuilder, private SignupService: SignupService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required]
    }, 
    // {
    //     validator: MustMatch('password', 'confirmPassword')
    //   }
    );
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  onSubmit(form: any){

    console.log("data ", form)
    this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
       else if(this.signupForm.valid){
         console.log("sus");
         
        this.SignupService.signUp(form).subscribe((data => {
          console.log(data)
          this.data = data
          if(this.data.status === 400 && this.data.data === "Error: User already exits"){
    
            this.errorMsg = "User already exits"
          }
          else if (this.data.status === 200){
            this.Router.navigate(['']); 
          }
        }))
        return
       }
          

  }

}
