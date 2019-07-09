import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] =
    [new Recipe(
      1,
      'A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Home-Made-Dishes-Recipe-Kitchen-Food-Bio-Meals-1175495.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]),
      new Recipe(
        2,
        'A Test Recipe 2',
        'This is simply a test 2',
        'https://www.maxpixel.net/static/photo/1x/Home-Made-Dishes-Recipe-Kitchen-Food-Bio-Meals-1175495.jpg',
        [
          new Ingredient('Meat', 30),
          new Ingredient('French fries', 10)
        ]),
    ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find(x => x.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) { }
}
