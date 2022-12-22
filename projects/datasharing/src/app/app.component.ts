import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datasharing';
  CurrentItem="Laptop";

  items=['item1','item2','item3']

  addItem(newItem:string)
  {
    this.items.push(newItem)
  }
}
