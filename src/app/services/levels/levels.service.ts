import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class LevelsService {

  constructor( private http: HttpClient ) { }

  configUrl = 'http://localhost:3000';
  dataObj = {};

  addLevel(name, type){

    this.dataObj = {
      "name" : name,
      "type": type
    }
    return this.http.post( `${this.configUrl}/tags`, this.dataObj);
  }

  addClass(name, type, levelId){

    this.dataObj = {
      "name" : name,
      "type": type,
      "levelId": levelId
    }
    return this.http.post( `${this.configUrl}/tags`, this.dataObj);
  }

  addSubject(name, type, classId){

    this.dataObj = {
      "name" : name,
      "type": type,
      "classId": classId
    }
    console.log("d", this.dataObj);
    
    return this.http.post( `${this.configUrl}/tags`, this.dataObj);
  }

  addUnit(name, type, subjectId){

    this.dataObj = {
      "name" : name,
      "type": type,
      "subjectId": subjectId
    }
    return this.http.post( `${this.configUrl}/tags`, this.dataObj);
  }

  addLesson(name, type, unitId){

    this.dataObj = {
      "name" : name,
      "type": type,
      "unitId": unitId
    }
    return this.http.post( `${this.configUrl}/tags`, this.dataObj);
  }

  //list
  listLevel(){
    const params = new HttpParams().set('type', 'level');
    return this.http.get( `${this.configUrl}/tags`, {params});
  }

  listClasses(levelId){
    const params = new HttpParams().set('type', 'class').set('levelId',levelId);
    return this.http.get( `${this.configUrl}/tags`, {params});
  }

  listSubjects(classId){
    const params = new HttpParams().set('type', 'subject').set('classId', classId);
    return this.http.get( `${this.configUrl}/tags`, {params});
  }

  listUnits(subjectId){
    const params = new HttpParams().set('type', 'unit').set('subjectId', subjectId);
    return this.http.get( `${this.configUrl}/tags`, {params});
  }

  listLessons(unitId){
    const params = new HttpParams().set('type', 'lesson').set('unitId', unitId);
    return this.http.get( `${this.configUrl}/tags`, {params});
  }
}
