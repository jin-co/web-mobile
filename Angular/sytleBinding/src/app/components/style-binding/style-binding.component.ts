// style-binding.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  bgMode: string = 'dark';
  device: string = '';

  constructor() {}

  ngOnInit(): void {}

}
