import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  url="assets/data/data.html";
  constructor(private http:Http) { }

  getResult(): Observable<any> {
        return this.http.get(this.url)
	        .map(result=>{
	        	return result.text();
	        })

    }
}
