import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  userName:string = ''
  constructor() { }
  getWords(e) {
    this.userName += e
    console.log(e)
  }
}
