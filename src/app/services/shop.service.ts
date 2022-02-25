import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Item } from "../model/item";

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    private dbPath = '/shops'

    shopsRef: AngularFireList<any>
    shopRef: AngularFireObject<any>

    constructor(private readonly db: AngularFireDatabase) {
        this.shopsRef = this.db.list(this.dbPath)
    }

    // Get shops
    getShopList() {
        return this.shopsRef;
    }

     // Get shop
    getShop(id: string) {
        this.shopRef = this.db.object('/shops/' + id);
        return this.shopRef;
    }

    updateItems(items: Item[]) {
        this.shopRef.update({items})
    }

}