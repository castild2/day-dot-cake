import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { Shop } from '../model/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pageName: string
  shop: Shop
  items: Item[]

  constructor(private readonly shopService: ShopService, private readonly router: Router) {
    this.pageName = "Products to expire"
  }


  ngOnInit(): void {
    this.getShop()
  }

  getShop() {
    this.shopService.getShop("43035315").valueChanges().subscribe((result: Shop) => {
      this.shop = result
      this.items = this.shop.items
      

      this.items?.sort((a, b) => {
        return Number(new Date(a.expireDate)) - Number(new Date(b.expireDate))
      })

      let currentDate = new Date()
      this.items?.map((item) => {
        item.expired = new Date(item.expireDate) <= currentDate
      })

    });
  }

  removeProduct(i: number) {

    this.items.splice(i, 1)

    this.shopService.updateItems(this.items)
    
    this.getShop()
  }

  goToDetail(item: Item) {
    this.router.navigate(['/tabs/tab1/detail', {item: JSON.stringify(item)}])
  }

}
