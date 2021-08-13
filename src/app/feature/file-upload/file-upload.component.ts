import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from '../file-upload-service.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileToUpload: File | null = null;
  files :File[]=[];
  reqJsonList : any = [];
  title : string = null;
  description : string = null;

  constructor(private fileUploadServiceService : FileUploadServiceService) { }

  ngOnInit(): void {
  }

  handleFileInput(fileVal: FileList){
    this.fileToUpload = fileVal.item(0);
  }

  addFile(){
    console.log("Name :: "+this.fileToUpload.name);
    var reqJson: any = {};
    reqJson["title"] = this.title
    reqJson["type"] = this.fileToUpload.type.split("/")[0]
    reqJson["videoposter"] = ""
    reqJson["description"] = this.description
    reqJson["effect"] = ""
    reqJson["filename"] = this.fileToUpload.name
    reqJson["filetype"] = this.fileToUpload.type
    reqJson["filesize"] = this.fileToUpload.size
    reqJson["uploaddate"] = Date.now()
    reqJson["uploadtime"] = new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true })
	
    this.reqJsonList.push(reqJson);
    this.files.push(this.fileToUpload);

  }

  uploadFiles(){
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.reqJsonList)); 
    for (const file of this.files) {
       formData.append('files', file, file.name); 
      }
    this.fileUploadServiceService.uploadFile(formData);
  }

}
