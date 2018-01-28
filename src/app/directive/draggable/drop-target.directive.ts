import { Output,EventEmitter,Directive,HostListener, Input,Renderer2, ElementRef } from '@angular/core';
import { DraggableService } from './draggable.service';
import { DropTargetOptions} from "./drop-target-option.model";
import { DraggableOptions } from "./draggable-options.model";

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {
  
  constructor(private _dragService: DraggableService) {}

   @Input()
  set appDropTarget(options: DraggableOptions) {
    if (options) {
      console.log(options);
      this.options = options;
    }else{
      this.options= {zone : 'zone', data : {}}
    }
  }

    @Output('myDrop') drop = new EventEmitter();

  private options: DraggableOptions;

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone', data = {}}=this.options;
    if (this._dragService.accepts(zone)) {
       event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data =  JSON.parse(event.dataTransfer.getData('Text'));
    this._dragService.addTodroppedStack(data);
    const finalStack= this._dragService.getDroppedStack();
    this.drop.next(finalStack);
  }
}
