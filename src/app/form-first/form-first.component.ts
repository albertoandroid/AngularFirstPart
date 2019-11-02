import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Form not submitted"
  defaultName = ""
  user = ""
  displayPassword = false
  lightStatus = "GREEN"
  names = ['Alberto', 'Marta', 'Maria', 'Marcos']
  

  //@Input() parentDataToChild
  @Input('parentDataToChild') messageFromParent

  @Output() childEvent = new EventEmitter();

  courses = []

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    //this.courses = this.courseService.getCourses()
    this.courseService.getCourses().subscribe(data=>this.courses=data)
  }

  onSendForm(email){
    console.log(this.courses)
    console.log(email)
    this.status = "Form has been sent"
  }

  onDefaultForm(){
    this.defaultName = "Alberto"
    
  }

  onSendEvent(){
    this.childEvent.emit('Enviando evento desde hijo hasta padre')
  }

}
