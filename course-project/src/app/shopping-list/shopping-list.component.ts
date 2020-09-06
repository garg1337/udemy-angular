import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingListState} from './store/shopping-list.reducer';
import { AppState } from '../store/app.reducer';
import { StartEdit } from './store/shopping-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  slState: Observable<ShoppingListState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.slState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit(index))
  }
}
