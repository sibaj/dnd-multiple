import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleDndDirective } from './multiple-dnd.directive';
import { DropTargetDirective } from './drop-target.directive';
import { DraggableService } from './draggable.service';



@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
  	MultipleDndDirective,
  	DropTargetDirective

  ],
  providers:[
  	DraggableService
  ],
  exports:[
  	MultipleDndDirective,
  	DropTargetDirective
  ]
})
export class DraggableModule { }
