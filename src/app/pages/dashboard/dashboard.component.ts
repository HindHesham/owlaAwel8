import {Component, OnInit} from '@angular/core';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import { LevelsService } from '../../services/levels/levels.service'
import { typeSourceSpan } from '@angular/compiler';

// import { tree } from './data';
// interface TreeNode {
//   name: string;
//   children?: TreeNode[];
// }
// const TREE_DATA: TreeNode[] = tree


@Component({
  selector: 'dashboard-component',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('levelNode', { static: false }) levelNode: ElementRef;
  @ViewChild('classNode', { static: false }) classNode: ElementRef;
  @ViewChild('subjectNode', { static: false }) subjectNode: ElementRef;
  @ViewChild('unitNode', { static: false }) unitNode: ElementRef;
  @ViewChild('lessonNode', { static: false }) lessonNode: ElementRef;

  level = false;
  class= false;
  subject = false;
  unit = false;
  lesson = false;
  addLevelInput = false;
  addClassInput = false;
  addSubjectInput = false;
  addUnitInput = false;
  addLessonInput = false;
  levels = []
  classes = []
  subjects = []
  units = []
  lessons = []
  levelData: any;
  levelId: any;
  classData: any;
  classId: any;
  classIdFromListClass: any;
  subjectData: any;
  subjectId: any;
  unitData: any;
  unitId: any;
  lessonData: any;
  lessonId: any;

  constructor( private LevelsService: LevelsService ) {
    this.listLevel();
  }

  ngOnInit() {
  }

  listLevel(){
    this.LevelsService.listLevel().subscribe((data=>{
      let dataArr = data;
      for (let i in dataArr) {
        this.levels.push(dataArr[i]);
       }
       return this.levels;
    }))
  }

  // request to get all levels from api
  addLevel(){
    let name = this.levelNode.nativeElement.value;
    let type = "level";
    this.LevelsService.addLevel(name, type).subscribe((data=>{
      
      if( data['status'] === 200 ){
        console.log("data ", data);
        this.addLevelInput = false;
        this.levelData = data['data']
        this.levelId = this.levelData['_id'];
        let levelNode = { name:this.levelData.name }
        this.levels.push(levelNode);
      }else{
        console.log(" adding level failed")
      } 
    })
  )}

  renderLevelsArray(){
    return this.levels;
  }

  listClasses(levelId){
    this.levelId = levelId;
    this.class = true;
    this.classes = [];
    this.LevelsService.listClasses(levelId).subscribe((data=>{
  
      let dataArr = data;
      for (let i in dataArr) {
        this.classes.push(dataArr[i]);
       }
       return this.classes;
    }))
  }

  addClass(){
    let name = this.classNode.nativeElement.value;
    let type = "class";

    this.LevelsService.addClass(name, type, this.levelId)
    .subscribe((data=>{
       
        if( data['status'] === 200 ){
          this.addClassInput = false;
          this.classData = data['data']
          this.classId = this.classData['_id'];
          let classNode = { name:this.classData.name }
          this.classes.push(classNode);
        }else{
          console.log(" adding class failed")
        } 
      })
    )
  
  }
  renderClassesArray(){
    return this.classes;
  }


  listSubjects(classId){
    console.log("data", classId);
    
    this.subject = true;
    this.classIdFromListClass = classId;
    this.subjects = [];

    this.LevelsService.listSubjects(classId).subscribe((data=>{
      let dataArr = data;
      for (let i in dataArr) {
        this.subjects.push(dataArr[i]);
       }
       return this.subjects;
    }))

  }
  addSubject(){
    
    let name = this.subjectNode.nativeElement.value;
    let type = "subject";
    
    this.LevelsService.addSubject(name, type, this.classIdFromListClass).subscribe((data=>{
       
        if( data['status'] === 200 ){
          console.log("data ", data);
          this.addSubjectInput = false;
          this.subjectData = data['data']
          this.subjectId = this.subjectData['_id'];
          let subjectNode = { name:this.subjectData.name }
          this.subjects.push(subjectNode);
        }else{
          console.log(" adding class failed")
        } 
      })
    )
  }
  renderSubjectsArray(){
    return this.subjects;
  }

  listUnit(subjectId){
    this.unit = true;

    this.subjectId = subjectId;
    this.units = [];

    this.LevelsService.listUnits(subjectId).subscribe((data=>{
      let dataArr = data;
      for (let i in dataArr) {
        this.units.push(dataArr[i]);
       }
       return this.units;
    }))
  }
  addUnit(){

    let name = this.unitNode.nativeElement.value;
    let type = "unit";

    this.LevelsService.addUnit(name, type, this.subjectId).subscribe((data=>{
       
        if( data['status'] === 200 ){
          console.log("data ", data);
          this.addUnitInput = false;
          this.unitData = data['data']
          this.unitId = this.unitData['_id'];
          let unitNode = { name:this.unitData.name }
          this.units.push(unitNode);
        }else{
          console.log(" adding unit failed")
        } 
      })
    )
  }
  renderUnitsArray(){
    return this.units;
  }

  listLessons(unitId){
    this.lesson = true ;
    this.unitId = unitId;
    this.lessons = [];

    this.LevelsService.listLessons(unitId).subscribe((data=>{
      let dataArr = data;
      for (let i in dataArr) {
        this.lessons.push(dataArr[i]);
       }
       return this.lessons;
    }))
  }

  addLesson(){
    let name = this.lessonNode.nativeElement.value;
    let type = "lesson";

    this.LevelsService.addLesson(name, type, this.unitId).subscribe((data=>{
       
        if( data['status'] === 200 ){
          console.log("data ", data);
          this.addLessonInput = false;
          this.lessonData = data['data']
          let lessonNode = { name:this.lessonData.name }
          this.lessons.push(lessonNode);
        }else{
          console.log(" adding lesson failed")
        } 
      })
    )
  }
  renderLessonsArray(){
    return this.lessons;
  }

  //list
 

 
}
