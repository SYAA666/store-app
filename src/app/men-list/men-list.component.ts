import { Component } from "@angular/core";

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
            image: "../../assets/images/items/bag.png"
        },
        {
            id: 2,
            name: "pants",
            image: "../../assets/images/items/pants.png"
        },
        {
            id: 3,
            name: "shirt",
            image: "../../assets/images/items/shirt.png"
        }
    ];
    
};