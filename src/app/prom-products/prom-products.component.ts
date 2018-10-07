import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-prom-products',
  templateUrl: './prom-products.component.html',
  styleUrls: ['./prom-products.component.css']
})
export class PromProductsComponent implements OnInit {

  constructor() { }
  @Input() products;
  ngOnInit() {
  }

}
