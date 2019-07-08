import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AddTeacherService } from '../../../services/teacher/add-teacher.service'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  page: string = '';
  videoUrl: any = "";
  errorMsg: String = "";
  submitted = false;
  teacherId: any;
  addVideoForm = new FormGroup({
    class: new FormControl(),
    subject: new FormControl(),
    unit: new FormControl(),
    lesson: new FormControl(),
    video: new FormControl(),
 
  });

  constructor( private Router: Router, private el: ElementRef, private formBuilder: FormBuilder, private route: ActivatedRoute, private teacherService: AddTeacherService ) {

    if(this.route.snapshot.paramMap.get('page') === 'list'){
      this.page = 'list';
    }else{
      this.page = 'add';
    }
    this.teacherId = this.route.snapshot.paramMap.get('teacherId');
   
  }

  ngOnInit() {

    this.addVideoForm = this.formBuilder.group({
      class: ['', Validators.required],
      subject: ['', Validators.required],
      unit: ['', Validators.required],
      lesson: ['', Validators.required],
      video: ['', Validators.required],
    },);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addVideoForm.controls[controlName].hasError(errorName);
  }

  upload(form) {
    const inputEl: any = this.el.nativeElement.querySelector('#video');
    const fileCount: any = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) {
        formData.append('video', inputEl.files.item(0));

        this.teacherService.uoploadVideo(formData)
        .subscribe(res => {
          if(res){
            this.videoUrl = res;
            console.log('video url', this.videoUrl);
            this.teacherService.addVideoForm(form, this.videoUrl, this.teacherId).subscribe((formVideoRes=>{
              console.log("add video from result", formVideoRes)
              if(formVideoRes){

              }else{
                this.errorMsg = "failed to upload video"
              }
            }));

          }else {
            this.errorMsg = "You must Upload video"
          }
            
        });
    }
  }

  onSubmit(form: any){

    this.submitted = true;

        // stop here if form is invalid
        if (this.addVideoForm.invalid) {
            return;
        }
       else if(this.addVideoForm.valid){

         var video = this.upload(form);
         console.log("S", video);
        return
       }
  }


}
