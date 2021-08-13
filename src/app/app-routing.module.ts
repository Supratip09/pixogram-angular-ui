import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './feature/file-upload/file-upload.component';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { PhotoGalleryComponent } from './feature/photo-gallery/photo-gallery.component';
import { RegisterComponent } from './feature/register/register.component';
import { VideoGalleryComponent } from './feature/video-gallery/video-gallery.component';


const routes: Routes = [{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'gallery/photo',
  component:PhotoGalleryComponent
},
{
  path:'gallery/video',
  component:VideoGalleryComponent
},
{
  path:'file/upload',
  component:FileUploadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
