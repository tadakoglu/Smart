import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './app-state';
import * as ListActions from 'src/app/app-state/actions/list.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

  /* Since we use immutable objects through NGRX state manager 
  we can optimize app speed with OnPush not to check for changes anytime */
  /* Reference : https://github.com/tadakoglu/change-detection-tree */

})
export class AppComponent implements OnInit {
  
  constructor(private readonly store: Store<State>) {}
  ngOnInit(): void {
   

  }
  title = 'Smart-Tayfun-Adakoğlu';
}
