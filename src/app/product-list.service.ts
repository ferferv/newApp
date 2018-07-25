import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  productos = [
    {
      _id: 1,
      name: "taza",
      price: 123,
      desc: "Pa tomar café",
      pic: ''
    },
    {
      _id: 2,
      name: "vaso",
      price: 123,
      desc: "Pa tomar agua",
      pic: ''
    },
    {
      _id: 3,
      name: "termo",
      price: 123,
      desc: "Pa tomar café",
      pic: ''
    },
    {
      _id: 4,
      name: "mesa",
      price: 123,
      desc: "pues una mesa wey",
      pic: ''
    },
  ]

  getList() {
    return this.productos
  }

  getOneProduct(id) {
    return this.productos.find(p => p._id == id)
  }
}
