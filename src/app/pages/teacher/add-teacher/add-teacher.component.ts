import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

import { AddTeacherService } from '../../../services/teacher/add-teacher.service'

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  // options: FormGroup;
  fileData = null;
  errorMsg: String = "";
  submitted = false;
  profileUrl: any = "";
  data: any;
  selecetdFile : File;
  imagePreview: any;

  addTeacherForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor( private Router: Router, private formBuilder: FormBuilder,  private el: ElementRef, private AddTeacherService: AddTeacherService) {     
   }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', Validators.required]
    },);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addTeacherForm.controls[controlName].hasError(errorName);
  }

 
  onSelectFile(event) {
     // called each time file input changes
     this.selecetdFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
      this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selecetdFile);
  }
  upload(form) {
    const inputEl: any = this.el.nativeElement.querySelector('#photo');
    const fileCount: any = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) {
        formData.append('photo', inputEl.files.item(0));
        console.log("f", inputEl);
        
        this.AddTeacherService.uoploadProfilePhoto(formData)
        .subscribe(res => {
          if(res){
            this.profileUrl = res;
            console.log('image url', this.profileUrl);
            this.AddTeacherService.addTeacher(form, this.profileUrl).subscribe((data=>{
                  this.data = data;
                  console.log("D", this.data);
                  if(this.data.status === 400 && this.data.data === "Error: User already exits"){
            
                    this.errorMsg = "User already exits"
                  }
                  else if (this.data.status === 200){
                    this.Router.navigate(['/teachers/allTeachers']); 
                  }
                 }));
          }
          else{
            this.errorMsg = "failed to upload photo"
          }
           
        });
    }
    else{
      this.errorMsg = "You must Upload Photo"
    }
    return ;

  }


  onSubmit(form: any){

    this.submitted = true;

        // stop here if form is invalid
        if (this.addTeacherForm.invalid) {
            return;
        }
       else if(this.addTeacherForm.valid){

         var image = this.upload(form);
         console.log("S", image);
         
        //  if (image){
        //   this.AddTeacherService.addTeacher(form, image).subscribe((data=>{
        //     this.data = data;
        //     console.log("D", this.data);
        //     if(this.data.status === 400 && this.data.data === "Error: User already exits"){
      
        //       this.errorMsg = "User already exits"
        //     }
        //     else if (this.data.status === 200){
        //       this.Router.navigate(['/teachers/allTeachers']); 
        //     }
        //    }));
        //  } else{
        //   this.errorMsg = "You must upload profile photo"
        //  }
        
        return
       }
          

  }

}
