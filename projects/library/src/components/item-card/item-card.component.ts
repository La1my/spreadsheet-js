import { Component } from '@angular/core';
import data from '@library/data/data.json';

@Component({
  selector: 'lib-item-card',
  templateUrl: './item-card.component.html',
})
export class ItemCardComponent {
  public data = data;
  getSomething() {
  }

}
