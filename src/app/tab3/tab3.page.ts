import { Component } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { format, parseISO } from 'date-fns';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../model/item';
import { Shop } from '../model/shop';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pageName: string
  deliveryDate = ''
  expireDate = ''


  itemForm: FormGroup

  constructor(private readonly shopService: ShopService, private readonly fb: FormBuilder) {
    this.pageName = "Add Items"

    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      expireDate: ['', [Validators.required]],
    })

  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  addItem() {
    this.shopService.getShop("43035315").valueChanges().pipe(filter(() => !this.itemForm.invalid)).subscribe((result: Shop) => {
      let shop = result
      let items = shop.items ?? []
      

      let item: Item = {
        name: this.itemForm.get('name').value,
        barcode: this.itemForm.get('barcode').value,
        quantity: this.itemForm.get('quantity').value,
        deliveryDate: this.itemForm.get('deliveryDate').value,
        expireDate: this.itemForm.get('expireDate').value,
      }

      items.push(item)
      this.shopService.addItemToShopById(items)
      
      this.itemForm.patchValue({
        name: '',
        barcode: '',
        quantity: '',
        deliveryDate: '',
        expireDate: ''
      })

    });
    
  }

}
