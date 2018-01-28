import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DragNDropComponent } from './drag-n-drop/drag-n-drop.component';
import { AppRoutingModule } from './app-routing.module';
import { HtmlGeneraterComponent } from './html-generater/html-generater.component';
import { RouterModule, Routes } from '@angular/router';
import {AppService} from './app.service';
import { DraggableModule } from './directive/draggable/draggable.module';



@NgModule({
  declarations: [
    AppComponent,
    DragNDropComponent,
    HtmlGeneraterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    DraggableModule
    

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
