import { Component, OnInit, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public input = new FormControl();
  public filProds = new Array();
  constructor() { }
  public filPrds = [];
  @Input() products;
  ngOnInit() {
    if (this.filPrds.length === 0) {
      this.filPrds = this.products;
    }
    this.input.valueChanges.subscribe(val => {
      if (val !== '') {
        this.filPrds = this.products.filter((item) => {
          if (item.name.toLowerCase().includes(val.toLowerCase())) {
            return item;
          }
        });
        } else {
          this.filPrds = this.products;
        }
    });
  }
}
