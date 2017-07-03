import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../product';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedSizeFilter = '';
  sizeFilters = ['XS', 'S', 'M', 'L', 'XL'];

  /**
   * Constructor
   * @param http
   */
  constructor(private http: Http) { }

  /**
   * Initialization
   */
  ngOnInit() {
    // Get Products
    this.http.get('/assets/data/products.json').toPromise().then(
      response => {
        const products = response.json();
        products.forEach(productData => {
          this.products.push(new Product(productData));
        });
      }
    ).catch(
      error => {
        console.log(error);
      }
    );
  }

  /**
   * Check if the provided product matches with the filter
   * @param product
   * @returns {boolean}
   */
  isFilteredProduct(product: Product) {
    // If filter hasn't been set, then always return true
    if (!this.selectedSizeFilter) {
      return true;
    }
    // If filter is set, then check if the product sizes match the filter
    if (product.size.indexOf(this.selectedSizeFilter) !== -1) {
      return true;
    }
    // Return false if doesn't match any
    return false;
  }
}
