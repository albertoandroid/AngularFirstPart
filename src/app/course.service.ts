import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourse} from './course'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "assets/data/courses.json"

  constructor(private http: HttpClient) { }
  getCourses(): Observable<ICourse[]>{
    
    return this.http.get<ICourse[]>(this.url)
    
    /*return [
      {'id': 1, 'name': 'MEAN', 'time': '10'},
      {'id': 2, 'name': 'Angular', 'time': '19'},
      {'id': 3, 'name': 'Java', 'time': '1'},
    ]*/
  }
}
