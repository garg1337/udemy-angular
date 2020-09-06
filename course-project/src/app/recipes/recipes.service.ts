import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { AddIngredients } from '../shopping-list/store/shopping-list.actions';

@Injectable({ providedIn: 'root' })
export class RecipeService {
    constructor(private store: Store<AppState>) { }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.store.dispatch(new AddIngredients(ingredients));
    }
}