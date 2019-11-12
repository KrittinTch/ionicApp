import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  OnDataChanged : BehaviorSubject<any>;

  constructor(public http: HttpClient) { 
    this.OnDataChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot) {
    this.getAccountData();
  }

  getAccountData() {
    return new Promise((resolve, reject) => {
      this.http.get('../../../assets/json/accountpage.json').subscribe((res: any) => {
        this.OnDataChanged.next(res.data);
        resolve(res.data);

      },reject)
    })
   }
}
