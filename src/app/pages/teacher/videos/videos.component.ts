import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AddTeacherService } from '../../../services/teacher/add-teacher.service';
import { LevelsService } from '../../../services/levels/levels.service'

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
  levels: any;
  classes: any;
  subjects: any;
  units: any;
  lessons: any;

  addVideoForm = new FormGroup({
    class: new FormControl(),
    subject: new FormControl(),
    unit: new FormControl(),
    lesson: new FormControl(),
    video: new FormControl(),
    level: new FormControl()
 
  });

  constructor( private Router: Router, private el: ElementRef, 
      private formBuilder: FormBuilder, 
      private route: ActivatedRoute, 
      private teacherService: AddTeacherService,
      private LevelsService: LevelsService
    ){

    if(this.route.snapshot.paramMap.get('page') === 'list'){
      this.page = 'list';
    }else{
      this.page = 'add';
    }
    this.teacherId = this.route.snapshot.paramMap.get('teacherId');
   
    console.log("id", this.teacherId, "page = ", this.page);
    this.listLevel();
    
  }

  ngOnInit() {
    this.addVideoForm = this.formBuilder.group({
      class: ['', Validators.required],
      subject: ['', Validators.required],
      unit: ['', Validators.required],
      lesson: ['', Validators.required],
      video: ['', Validators.required],
      level: ['', Validators.required]
    },);
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addVideoForm.controls[controlName].hasError(errorName);
  }


  listLevel(){
    this.LevelsService.listLevel().subscribe((data=>{
      if(data['length'] === 0 ){
        this.levels = [{name:"Not Found", id: null}]
      } else{
        this.levels = data;
      }
    }))
  }

  listClasses(levelId){
    this.LevelsService.listClasses(levelId).subscribe((data=>{
      if(data['length'] === 0 ){
        this.classes = [{name:"Not Found", id: null}]
      } else{
        this.classes = data;
      }
      
    }))
  }

  listSubjects(classId){
    this.LevelsService.listSubjects(classId).subscribe((data=>{
      if(data['length'] === 0 ){
        this.subjects = [{name:"Not Found", id: null}]
      } else{
        this.subjects = data;
      }      
    }))
  }

  listUnits(subjectId){
  
    this.LevelsService.listUnits(subjectId).subscribe((data=>{
      if(data['length'] === 0 ){
        this.units = [{name:"Not Found", id: null}]
      } else{
        this.units = data;
      }
    }))
  }

  listLessons(unitId){
    this.LevelsService.listLessons(unitId).subscribe((data=>{
      if(data['length'] === 0 ){
        this.lessons = [{name:"Not Found", id: null}]
      } else{
        this.lessons = data
      }
    }))
  }

  upload(form) {
    console.log("form ", form);

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

              if(formVideoRes['status'] === 200){

                this.Router.navigate(['/teachers/listVideos', {page: 'list'}]);
                
              }else{
                this.errorMsg = "failed to upload video";

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
        return
       }
  }


}
