// format.component.ts

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    content: new FormControl('', { validators: [Validators.minLength(10)] }),
    email: new FormControl('', {
      validators: [
        Validators.pattern(
          '^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$'
        ),
      ],
    }),
  });

  formBuilder = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.minLength(10)],
    email: [
      '',
      Validators.pattern(
        '^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$'
      ),
    ],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.form.valid) {
      console.log(this.form);
    }
    this.form.reset();
  }
}
