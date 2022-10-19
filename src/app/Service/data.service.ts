import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data1 ="This is a sample message from Service";

  constructor(private http:HttpClient) { }
  getData(){
    // return this.data1;
    return this.http.get('https://jsonplaceholder.typicode.com/users');
   }

   getRealTimeData(){
    return  this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
   getPromData(){
    return this.http.get('https://dummyjson.com/products/categories').toPromise();
   }
}
