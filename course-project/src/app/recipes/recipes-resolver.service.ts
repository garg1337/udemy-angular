import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model'
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { FetchRecipes, SET_RECIPES } from './store/recipe.actions';
import { RecipeState } from './store/recipe.reducer';
import { Actions, ofType } from '@ngrx/effects';
import { take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private store: Store<AppState>,
        private actions$: Actions) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('recipes').pipe(
            take(1),
            switchMap((recipeState: RecipeState) => {
                if (recipeState.recipes.length !== 0) {
                    return of(recipeState.recipes);
                } else {
                    this.store.dispatch(new FetchRecipes());
                    return this.actions$.pipe(ofType(SET_RECIPES), take(1));            
                }
            })
        )
    }
}