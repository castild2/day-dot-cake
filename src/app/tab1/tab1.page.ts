import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  pageName: string

  constructor(private readonly shopService: ShopService) {
    this.pageName = "Products to expire"
  }


  ngOnInit(): void {
    this.shopService.getShopList().snapshotChanges()
      .subscribe((data) => {
        console.log(data)
      })

    this.shopService.getShop("lkj34fij34").valueChanges().subscribe(res => {
      console.log(res)
    });
  }

}
