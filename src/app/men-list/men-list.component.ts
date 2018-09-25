import { Component, OnInit } from "@angular/core";
import { Item } from "../items";

@Component({
    selector: "men-list",
    templateUrl: "./men-list.component.html",
    styleUrls: ["./men-list.component.css"]
})

export class MenList {

    displayedItems = [
        0,
        1,
        2
    ]

    itemsList = [
        {
            id: 1,
            name: "bag1",
            price: 50,
            image: "../../assets/images/items/bag.png"
        },
        {
            id: 2,
            price: 40,
            name: "pants2",
            image: "../../assets/images/items/pants.png"
        },
        {
            id: 3,
            price: 70,
            name: "shirt3",
            image: "../../assets/images/items/shirt.png"
        },
        {
            id: 4,
            name: "bagbaf4",
            price: 50,
            image: "../../assets/images/items/bag.png"
        },
        {
            id: 5,
            price: 40,
            name: "pants5",
            image: "../../assets/images/items/pants.png"
        },
        {
            id: 6,
            price: 70,
            name: "shirt6",
            image: "../../assets/images/items/shirt.png"
        },
    ];

    items = [
        
    ];

    ngOnInit() {
        for(let i = 0; i < 3; i++) {
            this.items.push(this.itemsList[this.displayedItems[i]]);
        }
    }
    

    moveUp() {
        if(this.items[2].id === this.itemsList.length ) return;
        this.items = [];
        for(let i = 0; i < 3; i++) {
            this.items.push(this.itemsList[this.displayedItems[i]+1]);
            this.displayedItems[i] = this.displayedItems[i] + 1;
        }
    }

    moveDown() {
        if(this.items[0].id === 1) return;
        this.items = [];
        for(let i = 0; i < 3; i++) {
            this.items.push(this.itemsList[this.displayedItems[i] - 1]);
            this.displayedItems[i] = this.displayedItems[i] - 1;
        }
    }

    

};