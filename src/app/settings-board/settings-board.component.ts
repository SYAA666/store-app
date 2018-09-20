import { Component } from "@angular/core";

@Component({
    selector: "settings",
    templateUrl: "./settings-board.component.html",
    styleUrls: ["./settings-board.component.css"]
})
export class SettingsBoard {

    sortingWays = [
        {id: 1, sort: "cost"},
        {id: 2, sort: "letter"}
    ]

    isChildrenListVisible: boolean = false;
    isWomenListVisible: boolean = false;
    isMenListVisible: boolean = false;

    menList() {
        this.isMenListVisible=!this.isMenListVisible;
    }
    womenList() {
        this.isWomenListVisible = !this.isWomenListVisible;
    }
    childrenList() {
        this.isChildrenListVisible = !this.isChildrenListVisible;
    }

    seeAll() {
        this.isChildrenListVisible = true;
        this.isMenListVisible = true;
        this.isWomenListVisible = true;

    }
};