import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string
  producto: any

  constructor(private activatedRoute: ActivatedRoute,
  private service: ProductListService,
  private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.parent.snapshot.params.id
    this.producto = this.service.getOneProduct(this.id)
  }

  saveProducto(){
    if (!window.confirm('estás seguro?')) return
    this.service.updateProduct(this.producto)
    .then(()=>{
      this.router.navigate(['products'])
    }) 
  }

}
