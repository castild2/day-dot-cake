import { Item } from "./item";

export interface Shop {
    $key: string
    id: string
    items: Item[]
}