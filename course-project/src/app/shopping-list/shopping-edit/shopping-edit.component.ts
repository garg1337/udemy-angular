import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { AddIngredient, UpdateIngredient, DeleteIngredient, StopEdit } from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editSubscription: Subscription;
  @ViewChild('f', {static: false}) form: NgForm;
  editMode = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.editSubscription = this.store.select('shoppingList').subscribe(state => {
      if (state.editedIngredientIndex > -1) {
        this.editMode = true;
        this.form.setValue({
          name: state.editedIngredient.name,
          amount: state.editedIngredient.amount
        });  
      } else {
        this.editMode = false;
        if (this.form) {
          this.form.reset();
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
    this.store.dispatch(new StopEdit());
  }

  onSubmit() {
    const ingredient = new Ingredient(this.form.value.name, this.form.value.amount);
    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient(ingredient));
    } else {
     // this.shoppingListService.addIngredient(ingredient);
     this.store.dispatch(new AddIngredient(ingredient));
    }
    this.onClear();
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredient());
    this.onClear();
  }

  onClear() {
    this.store.dispatch(new StopEdit());
  }
}
