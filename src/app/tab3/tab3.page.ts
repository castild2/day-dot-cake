import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { format, parseISO } from 'date-fns';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../model/item';
import { Shop } from '../model/shop';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  pageName: string
  itemButton: string

  deliveryDate = ''
  expireDate = ''

  detailItem: Item




  itemForm: FormGroup

  constructor(private readonly shopService: ShopService, private readonly fb: FormBuilder, private route: ActivatedRoute) {
    this.pageName = "Add Items"
    this.itemButton = 'Add item'

    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]],
      expireDate: ['', [Validators.required]],
    })

  }

  ngOnInit(): void {
    this.detailItem = JSON.parse(this.route.snapshot.paramMap.get('item'))

    if(this.detailItem !== null) {
      this.pageName = this.detailItem.name

      this.itemForm.get('name').setValue(this.detailItem.name)
      this.itemForm.get('quantity').setValue(this.detailItem.quantity)
      this.itemForm.get('deliveryDate').setValue(new Date(this.detailItem.deliveryDate))
      this.itemForm.get('expireDate').setValue(new Date(this.detailItem.expireDate))

      this.deliveryDate = this.detailItem.deliveryDate
      this.expireDate = this.detailItem.expireDate

      this.itemButton = "Update"
    }
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
        quantity: this.itemForm.get('quantity').value,
        deliveryDate: this.itemForm.get('deliveryDate').value,
        expireDate: this.itemForm.get('expireDate').value,
      }

      items.push(item)
      this.shopService.updateItems(items)
      
      this.itemForm.patchValue({
        name: '',
        quantity: '',
        deliveryDate: '',
        expireDate: ''
      })

    });
    
  }

}
