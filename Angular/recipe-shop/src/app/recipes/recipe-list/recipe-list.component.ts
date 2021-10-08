import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  
  recipes:Recipe[] = [
    new Recipe('Test', 'a test', 'https://crystalandcomp.com/wp-content/uploads/2018/02/Irish-Nachos-4.jpg')
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipes)
  }

  onRecipeSelected(i:Recipe) {
    this.recipeWasSelected.emit(i)
  }
}
