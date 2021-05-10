import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColourService } from './services/colour/colour.service';
import { MessageService } from './services/message/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoodschapComponent } from './components/boodschap/boodschap.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { Page404Component } from './components/page404/page404.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { PaginaComponent } from './components/pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    BoodschapComponent,
    HomeComponent,
    BlogComponent,
    Page404Component,
    Child1Component,
    Child2Component,
    PaginaComponent
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
