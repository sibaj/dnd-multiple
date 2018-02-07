import { Injectable } from '@angular/core';
import { DraggableOptions } from "./draggable-options.model";

@Injectable()
export class DraggableService {
	private zone: string;
  private droppedStack:Array<any>
	muliModeOn:boolean=false;
  private highlightedItems:Array<any>;
  constructor(){
		this.droppedStack=[];
    this.highlightedItems=new Array<any>();
	}

  startDrag(zone: string) {
    this.zone = zone;
  }

  accepts(zone: string): boolean {
    return zone == this.zone;
  }

  addTodroppedStack(data:any){
    if(data instanceof Array){
      this.droppedStack = this.droppedStack.concat(data);
    }else{
      this.droppedStack.push(data);
    }
  }

  getDroppedStack(){
  	return this.droppedStack;
  }

  addToHighlightedItemStack(item){
    this.highlightedItems.push(item);
  }

  removeFromHighlightedItemStack(item){
    let index=this.highlightedItems.findIndex(x=>x.id==item.id);
    this.highlightedItems.splice(index, 1);
  }

  getHighlightedItemStack(){
    return this.highlightedItems;
  }

  getUniqueId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
