import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileStreamService } from '../file-stream.service';
import { FileModel } from '../model/file-model';
declare function reloadVideo() : any; 

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.scss']
})
export class VideoGalleryComponent implements OnInit {

  public itemvideoUrl:String;
  videos : FileModel[] = [];
  likes: string;
  numberofcomments: string;

  constructor(private fileStreamService : FileStreamService) { 
    
  }

  ngOnInit(): void {
    this.fetchVideos();
  }

  public changeVideoSource(id: string){
    this.itemvideoUrl="http://localhost:8081/v1/api/pixo/view/video/"+id;
    reloadVideo();
    this.videos.forEach(data => {
      this.likes=data.likes;
      this.numberofcomments = data.numberofcomments;
    })
  }

  fetchVideos(){
    this.fileStreamService.fetchImages('video').subscribe(data => {
      data.forEach(d=>{
        d.img = "http://localhost:8081/v1/api/pixo/view/image/thumbnail/"+d.id;
        console.log("The Video Data :: "+d);
      })
      this.videos=data;
    },
    error => {
      console.log("Error Occured :: "+error);
    }
    );

  }
}
