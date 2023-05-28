import { Injectable } from '@angular/core';
import { HttpClient,HttpBackend } from '@angular/common/http';
import { globalapis } from '../shared/globalapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  httpClient!: HttpClient;
  constructor(private http:HttpClient,handler:HttpBackend) {
    this.httpClient = new HttpClient(handler)
   }

  register(data:any,is_super:any):Observable<any>{
    return this.http.post(`${globalapis.registration}?is_super=${is_super}`,data);
  }

  login(data:any):Observable<any>{
    return this.httpClient.post(globalapis.login,data);
  }

  getuserdatas():Observable<any>{
    return this.http.get(globalapis.getclients);
  }

  getqrcodes():Observable<any>{
    return this.http.get(globalapis.getqrcodes);
  }

  assignqr(data:any):Observable<any>{
    return this.http.put(globalapis.assignqr,data);
  }

  createqr(data:any):Observable<any>{
    return this.http.post(globalapis.createqr,data);
  }

}

