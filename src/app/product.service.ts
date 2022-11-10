import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
 

  getProducts(){
  return [
  {"shortcode": 1, "name": "Ispahani", "price": 120, "category": "Tea"},
  {"shortcode": 2, "name": "Armani", "price": 1000, "category": "Cloth"},
  {"shortcode": 3, "name": "Samsung", "price": 12000, "category": "Phone"},
  {"shortcode": 4, "name": "Hitachi", "price": 70000, "category": "Fridge"},
  {"shortcode": 5, "name": "Haylou", "price": 2500, "category": "Watch"},
  {"shortcode": 6, "name": "Earbuds", "price": 600, "category": "Earbuds"}
  
    ];
  }


}
