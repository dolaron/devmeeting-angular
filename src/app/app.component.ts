import { Component, Input } from '@angular/core';
import { Product } from './models';
import { ProductsComponent } from './products/products.component';
import { PromProductsComponent} from './prom-products/prom-products.component';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devmeetings-angular';
  products: Product[] = [
    {name: 'Macbook', id: 7243, price: 150},
    {name: 'Mouse', id: 2222, price: 250},
  ];

}
