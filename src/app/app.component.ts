import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  constructor(){
    this.setFavicon("favicon.ico");
  }

  setFavicon(url)
{
    this.removeFavicon();
    var link=document.createElement('link');
    link.rel='icon';
    link.type='image/x-icon';
    link.href=url;
    document.getElementsByTagName('head')[0].appendChild(link);
     console.log("Set FavIcon URL to " + this.getFavicon().href);

 }

 removeFavicon()
{
    var links=document.getElementsByTagName('link');
    var head=document.getElementsByTagName('head')[0];
    for(var i=0; i<links.length; i++)
    {
        if(links[i].getAttribute('rel')==='icon'){
             head.removeChild(links[i])
        }         
    }      
}

getFavicon()
{
    var links=document.getElementsByTagName('link');
    for(var i=0; i<links.length; i++)
    {
        if (links[i].getAttribute('rel')==='icon')
        {
            return links[i];
        }       
    }
    return undefined;
}


}
