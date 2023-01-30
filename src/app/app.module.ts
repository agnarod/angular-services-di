import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountService } from './account.service';
import { AccountComponent } from './account/account.component';

import { AppComponent } from './app.component';
import { LogginService } from './login.service';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
