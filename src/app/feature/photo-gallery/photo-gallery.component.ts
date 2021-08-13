import { Component, OnInit } from '@angular/core';
import { FileModel } from '../model/file-model';
import { FileStreamService } from '../file-stream.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  modalImgSource: string;
  images : FileModel[] = [];
  likes: string;
  numberofcomments: string;
  
  constructor(private fileStreamService : FileStreamService) { }

  ngOnInit(): void {
    this.fetchImages();
  }
  
  reloadImg(id){
    this.modalImgSource = "http://localhost:8081/v1/api/pixo/view/image/"+id;
    this.images.forEach(data => {
      this.likes=data.likes;
      this.numberofcomments = data.numberofcomments;
    })
  }


  fetchImages(){
    this.fileStreamService.fetchImages('image').subscribe(data => {
      data.forEach(d=>{
        d.img = "http://localhost:8081/v1/api/pixo/view/image/thumbnail/"+d.id;
        console.log("The Image Data :: "+d);
      })
      this.images=data;
    },
    error => {
      console.log("Error Occured :: "+error);
    }
    );

  }

}
