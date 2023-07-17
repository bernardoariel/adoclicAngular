import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChisteResponse } from '../interfaces/chiste.interface';


@Injectable({
  providedIn: 'root'
})
export class ChistesService {
  
  private readonly baseUrl:string = environment.baseUrlChistes
  
  constructor(
    private http:HttpClient
  ) { }

   getChiste():Observable<ChisteResponse>{
    return this.http.get<ChisteResponse>(this.baseUrl)
  }

}
