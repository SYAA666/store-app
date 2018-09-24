import { Component } from "@angular/core";

@Component({
    selector: "women-list",
    templateUrl: "./women-list.component.html",
    styleUrls: ["./women-list.component.css"]
})

export class WomenListComponent {

    displayedItems = [
        0,
        1,
        2
    ]

    itemsList = [
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
        {
            id: 4,
            name: "bagbaf",
            price: 50,
            image: "../../assets/images/items/bag.png"
        },
        {
            id: 5,
            price: 40,
            name: "pants",
            image: "../../assets/images/items/pants.png"
        },
        {
            id: 6,
            price: 70,
            name: "shirt",
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
        this.items = [];
        for(let i = 0; i < 3; i++) {
            this.items.push(this.itemsList[this.displayedItems[i]+1]);
            this.displayedItems[i] = this.displayedItems[i] + 1;
        }
    }

    moveDown() {
        this.items = [];
        for(let i = 0; i < 3; i++) {
            this.items.push(this.itemsList[this.displayedItems[i] - 1]);
            this.displayedItems[i] = this.displayedItems[i] - 1;
        }
    }
};