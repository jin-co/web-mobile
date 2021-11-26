import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-main',
  templateUrl: './r-main.component.html',
  styleUrls: ['./r-main.component.scss']
})
export class RMainComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}

// https://www.concretepage.com/angular-2/angular-2-formgroup-example
