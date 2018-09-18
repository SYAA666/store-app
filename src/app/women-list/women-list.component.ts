import { Component } from "@angular/core";

@Component({
    selector: "women-list",
    templateUrl: "./women-list.component.html",
    styleUrls: ["./women-list.component.css"]
})

export class WomenListComponent {

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