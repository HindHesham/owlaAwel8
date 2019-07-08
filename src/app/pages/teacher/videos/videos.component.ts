import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  page: string = '';
  addVideoForm = new FormGroup({
    video: new FormControl(),
 
  });
  constructor( private Router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute ) {
   
   

    if(this.route.snapshot.paramMap.get('page') === 'list'){
      this.page = 'list';
    }else{
      this.page = 'add'
    }
   
  }

  ngOnInit() {

    this.addVideoForm = this.formBuilder.group({
      video: ['', Validators.required],
    },);
  }

  onSelectFile(event){
    console.log(event);
    
  }

  onSubmit(formValue){
    console.log("val", formValue);
    
  }


}
