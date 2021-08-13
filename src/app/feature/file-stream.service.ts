import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from './model/file-model';

@Injectable({
  providedIn: 'root'
})
export class FileStreamService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  fetchImages(type:string){
    return this.http.get<FileModel[]>("http://localhost:8081/v1/api/pixo/info/file?type="+type,this.httpOptions);
  }
}
