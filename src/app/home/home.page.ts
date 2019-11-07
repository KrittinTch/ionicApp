import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;

  constructor(public homeservice: HomeService) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {
    this.homeservice.OnDataChanged.subscribe((res: any) => {
      this.data = res;
      console.log(res);
    })
    
  }

}
