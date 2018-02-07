import { Directive,Input,HostBinding,HostListener,ElementRef } from '@angular/core';
import { DraggableService } from './draggable.service';
import { DraggableOptions } from "./draggable-options.model";


@Directive({
  selector: '[appMultipleDnd]'
})
export class MultipleDndDirective {
  @Input() backgroundColor="blue";
  highlighted=false;
  constructor(private dragService: DraggableService,
              private _element:ElementRef) { 
    this._element.nativeElement.addEventListener('click',
      this.hostElementClicked.bind(this));
  }

  hostElementClicked(event){
      if(event.ctrlKey){
        this.highlighted=!this.highlighted;
        this.highlightBackground();
        if(this.highlighted){
          this.dragService.addToHighlightedItemStack(this.options.data);  
        }else{
           this.dragService.removeFromHighlightedItemStack(this.options.data);         
        }
      }else{
        this.dragService.removeFromHighlightedItemStack();
      }
  }

  highlightBackground(){
    this._element.nativeElement.style.background
    =this.highlighted? this.backgroundColor:"white";
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
    const zone = 'zone';
    let data = this.highlighted? 
               this.dragService.getHighlightedItemStack():
               this.options.data;
    this.dragService.startDrag(zone);
    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
}
