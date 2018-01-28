import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragNDropComponent} from './drag-n-drop/drag-n-drop.component';
import { HtmlGeneraterComponent } from './html-generater/html-generater.component';




const routes: Routes = [
  { path: '', redirectTo:'/htmlgenerator',pathMatch:'full' },
  { path: 'htmlgenerator', component: HtmlGeneraterComponent },
  { path: 'dragndrop', component: DragNDropComponent },
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
