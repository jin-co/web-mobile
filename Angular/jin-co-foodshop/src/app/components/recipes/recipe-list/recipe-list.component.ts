import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
