import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCourses(){
    return [
      {'id': 1, 'name': 'MEAN', 'time': '10'},
      {'id': 2, 'name': 'Angular', 'time': '19'},
      {'id': 3, 'name': 'Java', 'time': '1'},
    ]
  }
}
