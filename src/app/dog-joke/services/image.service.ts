import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImagenResponse } from '../interfaces/imagen.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly baseUrl:string = environment.baseUrlImagenes

  constructor(
    private http:HttpClient
  ) { }

  getImage():Observable<ImagenResponse>{
    return this.http.get<ImagenResponse>(this.baseUrl)
  }
}
