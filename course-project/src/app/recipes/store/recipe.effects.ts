import { Actions, Effect, ofType } from '@ngrx/effects';
import { FETCH_RECIPES, SetRecipes, STORE_RECIPES, StoreRecipes } from './recipe.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
    @Effect()
    fetchRecipes = this.actions$.pipe(
        ofType(FETCH_RECIPES),
        switchMap(() => {
            return this.http.get<Recipe[]>('https://ng-complete-guide-98f5e.firebaseio.com/recipes.json')
        }),
        map(recipes => {
            if (!recipes) {
                return [];
            }
            return recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
            })
        }),
        map(recipes => new SetRecipes(recipes))
    );

    @Effect({
        dispatch: false
    })
    storeRecipes = this.actions$.pipe(
        ofType(STORE_RECIPES),
        switchMap((storeRecipeAction: StoreRecipes) => {
           return this.http.put('https://ng-complete-guide-98f5e.firebaseio.com/recipes.json', storeRecipeAction.payload)
        })
    )

    constructor(private actions$: Actions, private http: HttpClient) {}
}