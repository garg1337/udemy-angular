import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { tap, switchMap, take } from 'rxjs/operators';
import { RecipeState } from '../store/recipe.reducer';
import * as recipeActions from '../store/recipe.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  form: FormGroup;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.sub = this.route.params.pipe(
      tap(params => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }),
      switchMap(() => this.store.select('recipes')),
    )
    .subscribe(recipeState => this.initForm(recipeState));
  }

  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

  private initForm(recipeState: RecipeState) {
    let recipeName = ''; 
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = recipeState.recipes[this.id];
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': ingredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.form.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }

  get controls() { // a getter!
    return (<FormArray>this.form.get('ingredients')).controls;
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.form.value.name,
      this.form.value.description,
      this.form.value.imagePath,
      this.form.value.ingredients);
    if (this.editMode) {
      this.store.dispatch(new recipeActions.UpdateRecipe({
        index: this.id,
        recipe: newRecipe
      }));
      this.router.navigate(['/recipes', this.id])
    } else {
      this.store.dispatch(new recipeActions.AddRecipe(newRecipe));
      this.store.select('recipes').pipe(take(1)).subscribe(recipeState => {
        this.router.navigate(['/recipes', recipeState.recipes.length -1])
      })
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
