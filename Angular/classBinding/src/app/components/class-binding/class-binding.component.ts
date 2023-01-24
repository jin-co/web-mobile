/* class-binding.component.ts */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
})
export class ClassBindingComponent implements OnInit {
  bgMode: string = 'dark';
  device: string = '';

  constructor() {}

  ngOnInit(): void {}
}
