import { Component } from "@angular/core";
import { Item } from "../items";

@Component({
    selector: "men-list",
    templateUrl: "./men-list.component.html",
    styleUrls: ["./men-list.component.css"]
})

export class MenList {

    items = [
        {
            id: 1,
            name: "bag",
            price: 50,
            image: "../../assets/images/items/bag.png"
        },
        {
            id: 2,
            price: 40,
            name: "pants",
            image: "../../assets/images/items/pants.png"
        },
        {
            id: 3,
            price: 70,
            name: "shirt",
            image: "../../assets/images/items/shirt.png"
        },
    ];
    
};