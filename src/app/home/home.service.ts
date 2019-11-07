import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  OnDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) {
    this.OnDataChanged = new BehaviorSubject([]);
   }
   
   resolve(route: ActivatedRouteSnapshot) {
     this.getHomeData();
   }

   getHomeData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/home.json').subscribe((res: any) => {
        this.OnDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }



}
