import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from  '../product-list.service'
import { query } from '../../../node_modules/@angular/core/src/render3/query';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProductListService]
})
export class DetailComponent implements OnInit {
  
  producto: any = {}
  id: any

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductListService 
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params => {
      console.log(params.id)
      this.id = params.id
      this.producto = this.service.getOneProduct(this.id)
    })

    //query
    this.activeRoute.queryParams
    .subscribe(query => {
      console.log(query)
    })
  }

}
