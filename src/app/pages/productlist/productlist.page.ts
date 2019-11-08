import { ProductlistService } from './productlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {
  datas: any;

  constructor(public productservice: ProductlistService) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  }

  ngOnInit() {
    this.productservice.OnDataChanged.subscribe((res: any) => {
      this.datas = res;
      console.log(res);
    })
  }

}
