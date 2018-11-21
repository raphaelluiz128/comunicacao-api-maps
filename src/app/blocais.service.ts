import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlocaisService {
  locaisUrl='http://private-68ec8a-coordapi.apiary-mock.com/questions';
  constructor(private http: HttpClient) { }
  
  listar(){
   return this.http.get<any>(`${this.locaisUrl}`);
  }

}
