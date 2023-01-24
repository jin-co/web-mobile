import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  interpolation:string = 'interpolation test'
  constructor() { }

  ngOnInit(): void {
  }

}
