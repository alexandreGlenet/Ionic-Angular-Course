import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'schnitzel',
      imageUrl: 'https://assets.afcdn.com/recipe/20190108/85686_w1024h768c1cx1421cy3684cxt0cyt0cxb3536cyb5310.jpg',
      ingredients: ['frites', 'porc', 'salades']
    },
    {
      id: 'r2',
      title: 'spaghetti',
      imageUrl: 'https://assets.afcdn.com/recipe/20180326/78158_w1024h768c1cx2736cy1824cxt0cyt0cxb5472cyb3648.jpg',
      ingredients: ['pates', 'tomates', 'salades']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe=> {
      return recipe.id == recipeId;
    })};
  }
}
