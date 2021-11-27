import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseURL = 'http://localhost:8080/blog/api/v1/posts';
@Injectable()
export class PostService {
  constructor(
    private httlClient: HttpClient
  ) { }
  readAll(data: any): Observable<any>{
    return this.httlClient.post(baseURL + "/list", JSON.stringify(data));
  }

  read(data: any): Observable<any>{
    return this.httlClient.post(baseURL + "/getproduct", JSON.stringify(data));
  }

  create(data:any): Observable<any>{
    return this.httlClient.post(baseURL + "/saveproduct", JSON.stringify(data));
  }


  delete(data: any): Observable<any>{
    return this.httlClient.post(baseURL + "/deleteproduct", JSON.stringify(data));
  }
}