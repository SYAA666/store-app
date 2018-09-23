import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GoogleLogo } from './google-logo/google-logo.component';
import { SettingsBoard } from './settings-board/settings-board.component'
import { MenList } from './men-list/men-list.component';
import { ItemComponent } from './item/item.component';
import { WomenListComponent } from './women-list/women-list.component';
import { ChildrenListComponent } from './children-list/children-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleLogo,
    SettingsBoard,
    MenList,
    ItemComponent,
    WomenListComponent,
    ChildrenListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
