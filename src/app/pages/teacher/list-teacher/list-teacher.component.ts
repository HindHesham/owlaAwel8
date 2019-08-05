import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { AddTeacherService } from '../../../services/teacher/add-teacher.service';
import { Router } from "@angular/router";

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ModalComponent } from '../../../component/modal/modal.component'

var ELEMENT_DATA= [];

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})


export class ListTeacherComponent implements OnInit {

  displayedColumns = ['id','Name', 'Email', 'Action'];
  dataSource;


  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private AddTeacherService: AddTeacherService, private Router: Router ) {}

  ngOnInit() {    
    this.ListTeachers();
  }

  ListTeachers(){
    this.AddTeacherService.ListUsers().subscribe((data =>{
      let res = data['data'];
      this.getAllTeachers(res)
      
    }))
  }

  getAllTeachers( data ){
    this.dataSource = new MatTableDataSource(data); 
  }
  
  redirectToDelete(id){
    console.log("id", id);
    
  }

  redirectToList(id){
    console.log("id", id);
    this.Router.navigate(['/teachers/listVideos', {page: 'list'}]);
    
  }
  
  redirectToAdd(id){
    console.log("id", id);
    this.Router.navigate(['/teachers/listVideos', {page: 'add', teacherId: id}]);
    
  }

}
