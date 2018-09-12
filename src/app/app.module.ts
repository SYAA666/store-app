import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleLogo } from './google-logo/google-logo.component';
import { SettingsBoard } from './settings-board/settings-board.component'
import { MenList } from './men-list/men-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleLogo,
    SettingsBoard,
    MenList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
