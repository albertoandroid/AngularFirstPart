import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status = "Form not submitted"
  defaultName = ""

  constructor() { }

  ngOnInit() {
  }

  onSendForm(email){
    console.log(email)
    this.status = "Form has been sent"
  }

  onDefaultForm(){
    this.defaultName = "Alberto"
  }

}
