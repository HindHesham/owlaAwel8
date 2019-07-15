import {Component, OnInit} from '@angular/core';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';


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

  @ViewChild('classNode', { static: false }) classNode: ElementRef;
  @ViewChild('subjectNode', { static: false }) subjectNode: ElementRef;
  @ViewChild('unitNode', { static: false }) unitNode: ElementRef;
  @ViewChild('lessonNode', { static: false }) lessonNode: ElementRef;

  class= false;
  subject = false;
  unit = false;
  lesson = false;
  addClassInput = false;
  addSubjectInput = false;
  addUnitInput = false;
  addLessonInput = false;
  levels = []
  classes = []
  subjects = []
  units = []
  lessons = []

  constructor() {
  }

  ngOnInit() {
  }

  // request to get all levels from api
  getAllLeveles(){
    this.levels.push({name:"المرحله الابتدائيه "})
  }
  renderLevelsArray(){
    return this.levels;
  }

  addClass(){
    console.log(this.classNode.nativeElement.value);
    this.addClassInput = false;
    let classNode = { name:this.classNode.nativeElement.value }
    this.classes.push(classNode);

  }

  renderClassesArray(){
    return this.classes;
  }

  addSubject(){
    console.log(this.subjectNode.nativeElement.value);
    this.addSubjectInput = false;

    let subjectNode = { name: this.subjectNode.nativeElement.value }
    this.subjects.push(subjectNode)

  }
  renderSubjectsArray(){
    return this.subjects;
  }

  addUnit(){
    console.log(this.unitNode.nativeElement.value);
    this.addUnitInput = false;
    let unitNode = { name: this.unitNode.nativeElement.value }
    this.units.push(unitNode);
    
  }
  renderUnitsArray(){
    return this.units;
  }

  addLesson(){
    console.log(this.lessonNode.nativeElement.value);
    this.addLessonInput = false;
    let lessonNode = { name: this.lessonNode.nativeElement.value }
    this.lessons.push(lessonNode);
  }
  renderLessonsArray(){
    return this.lessons;
  }
}
