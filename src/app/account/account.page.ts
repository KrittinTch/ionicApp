import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  data: any;

  constructor(public accountservice: AccountService) { }

  ngOnInit() {
    this.accountservice.OnDataChanged.subscribe((res: any) => {
      this.data = res;
      console.log(this.data)
    })
    }

}
