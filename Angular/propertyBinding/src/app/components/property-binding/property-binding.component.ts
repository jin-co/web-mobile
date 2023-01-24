import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  image: { title:string, src: string; alt: string, height:string };
  constructor() {
    this.image = {
      title: "random image",
      src: 'https://source.unsplash.com/random',
      alt: 'random picture',
      height: "300"
    };
  }

  ngOnInit(): void {}
}
