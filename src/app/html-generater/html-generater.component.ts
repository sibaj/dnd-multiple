import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-html-generater',
  templateUrl: './html-generater.component.html',
  styleUrls: ['./html-generater.component.css']
})
export class HtmlGeneraterComponent implements OnInit {
htmlData:any
  constructor(private appService:AppService,private _sanitizer: DomSanitizer){
  	this.appService.getResult()
  	.subscribe(result=>{

      var parser = new DOMParser();
      var nodeList = parser.parseFromString(result,"text/html");
      var app = nodeList.getElementsByTagName("*");
      for(var i=0; i< app.length; i++){
        app[i].setAttribute("_test","value");
      }

      var div=document.createElement("div");
        div.appendChild(nodeList.head);
        div.appendChild(nodeList.body);

  			this.htmlData = 
        this._sanitizer.bypassSecurityTrustHtml(div.innerHTML);
  		})
  }

  ngOnInit() {
  }

  
  documentClicked(event){
    //var hash = window.location.hash;
    //event.preventDefault();
  }

}
