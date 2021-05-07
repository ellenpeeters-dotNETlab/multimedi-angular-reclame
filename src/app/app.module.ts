import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColourService } from './services/colour/colour.service';
import { MessageService } from './services/message/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoodschapComponent } from './components/boodschap/boodschap.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BoodschapComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ColourService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
