import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products: any[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

}
