import { Directive,Input,HostBinding,HostListener,ElementRef } from '@angular/core';
import { DraggableService } from './draggable.service';
import { DraggableOptions } from "./draggable-options.model";


@Directive({
  selector: '[appMultipleDnd]'
})
export class MultipleDndDirective {

  constructor(private dragService: DraggableService,
              private _element:ElementRef) { 
    this._element.nativeElement.addEventListener('click',
      this.hostElementClicked.bind(this));
    
  }

  hostElementClicked(event){
      console.log(event.ctrlKey);
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set appMultipleDnd(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }

  private options: DraggableOptions = {};
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {} } = this.options;
    this.dragService.startDrag(zone);
    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
}
