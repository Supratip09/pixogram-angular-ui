import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http: HttpClient) { }

  uploadFile(formData : FormData){
    this.http.post("http://localhost:8081/v1/api/pixo/upload/file", formData).subscribe(data=>{
      console.log("Data : "+data);
    });
  }
}
