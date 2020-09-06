import { Recipe } from '../recipe.model';
import { RecipeActions, SET_RECIPES, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from './recipe.actions';

export interface RecipeState {
    recipes: Recipe[]
}

const initialState: RecipeState = {
    recipes: []
}

export function recipeReducer(state = initialState, action: RecipeActions) {
    switch (action.type) {
        case SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case UPDATE_RECIPE:
            const updatedRecipe = {
                ...state.recipes[action.payload.index],
                ...action.payload.recipe
            };

            const updatedRecipes = [...state.recipes]
            updatedRecipes[action.payload.index] = updatedRecipe;

            return {
                ...state,
                recipes: updatedRecipes
            }
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((_, i) => i !== action.payload)
            }
        default:
            return state;
    }
}