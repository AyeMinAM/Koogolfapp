import { Component } from '@angular/core';

/**
 * Generated class for the PrebookteeDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'prebooktee-detail',
  templateUrl: 'prebooktee-detail.html'
})
export class PrebookteeDetailComponent {

  text: string;

  constructor() {
    console.log('Hello PrebookteeDetailComponent Component');
    this.text = 'Hello World';
  }

}
