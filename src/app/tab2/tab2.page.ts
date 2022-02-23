import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { Shop } from '../model/shop';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pageName: string
  items: Item[]
  itemsSelected: Item[]

  constructor(private readonly shopService: ShopService) {
    this.pageName = "Calendar"
  }

  ngOnInit(): void {
    this.shopService.getShop("43035315").valueChanges().subscribe((result: Shop) => {
      let shop = result
      this.items = shop.items
    });
  }

  getExpireProducts(date) {
    let selectedDate = new Date(date)

    let selectedDay = selectedDate.getDate()
    let selectedMonth = selectedDate.getMonth()
    let selectedYear = selectedDate.getFullYear()

    this.itemsSelected = this.items.filter((item) => {

      let itemExpireDate = new Date(item.expireDate)

      let itemDay = itemExpireDate.getDate()
      let itemMonth = itemExpireDate.getMonth()
      let itemYear = itemExpireDate.getFullYear()

      return selectedDay == itemDay && selectedMonth == itemMonth && selectedYear == itemYear

    })
  }

}
