import { Injectable } from '@angular/core';

@Injectable()
export class DraggableService {
	private zone: string;
private droppedStack:Array<any>

	constructor(){
		this.droppedStack=[];
	}

  startDrag(zone: string) {
    this.zone = zone;
  }

  accepts(zone: string): boolean {
    return zone == this.zone;
  }

  addTodroppedStack(data:any){
  	this.droppedStack.push(data);
  }

  getDroppedStack(){
  	return this.droppedStack;
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
