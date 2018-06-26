import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  urlgustavo = 'http://192.168.0.7:8080/api-grules/webresources/eventos';
  urlgustavo2 = 'http://192.168.0.7:8080/api/webresources/produtos';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getImagens(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/albums/1/photos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getEventos(){
    return new Promise(resolve => {
      this.http.get(this.urlgustavo).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }
}
