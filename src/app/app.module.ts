import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpRepositoryService } from './core/service/http-repository.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
