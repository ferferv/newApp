import { Injectable } from '@angular/core';
import { resolve } from 'path';
import { reject } from '../../node_modules/@types/q';

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

  updateProduct(producto){
    return new Promise((resolve, reject) =>{
      this.productos = this.productos.map(p => {
        if(p._id == producto._id) return producto
        return p
    }) //map
      return resolve()
    })
    //this.productos = [...this.productos.filter(p => p._id == producto._id), producto]
  }
}
