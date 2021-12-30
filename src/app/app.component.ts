import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

  /* Since we use immutable objects through NGRX state manager 
  we can optimize app speed with OnPush not to check for changes anytime */
  /* Reference : https://github.com/tadakoglu/change-detection-tree */

})
export class AppComponent {
  title = 'Smart-Tayfun-Adakoğlu';
}
