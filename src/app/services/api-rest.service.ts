import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  constructor(
    private http: HttpClient
  ) {}

  public doPost(url: string, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, data, {headers});
  }

  public doGet(url: string) {
    return this.http.get(url);
  }

  public doPut(url: string, data: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, data, {headers});
  }

  public doDelete(url: string){
    return this.http.delete(url);
  }
}
