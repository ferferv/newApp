import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../product-list.service'
import { SwapiService } from '../swapi.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']//,
  // providers: [ProductListService]
})
export class ProductPageComponent implements OnInit {

  productos: Array<any>
  characters: Array<any>
  
  constructor(
    private router: Router,
    private service: ProductListService,
    private swapi: SwapiService
  ) {}
  
  selectedProducts: Array<any> = []

  showProduct(producto) {
    // this.selectedProducts.push(producto)
    console.log(producto)
  }

  ngOnInit() {
    this.productos = this.service.getList()
    this.swapi.getCharacters()
    .subscribe(response => {
      console.log(response)
    })
  }

}