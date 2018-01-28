import { Component, OnInit } from '@angular/core';
import {DraggableItemModel } from "./draggable-item.model";




@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.css']
})
export class DragNDropComponent implements OnInit {
draggableItems:Array<DraggableItemModel>;
  droppedStack:Array<DraggableItemModel>;
  constructor() { }

  ngOnInit() {
    this.draggableItems=this.getDraggableItem();
  }

  getDraggableItem():Array<DraggableItemModel>{
    let result:Array<DraggableItemModel>=[];
    for(var i=0;i<10;i++){
      let oDraggableItem=new DraggableItemModel();
      oDraggableItem.id=this.guid();
      oDraggableItem.name="draggable-item"+i;
      result.push(oDraggableItem);
    }
    return result;
  }

  guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  onDrop(event){
    this.droppedStack=event;
  }
}
