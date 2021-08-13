import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppSharedModule } from './app-shared.module';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { PhotoGalleryComponent } from './feature/photo-gallery/photo-gallery.component';
import { HomeComponent } from './feature/home/home.component';
import { VideoGalleryComponent } from './feature/video-gallery/video-gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './feature/file-upload/file-upload.component';



@NgModule({
  declarations: [
  LoginComponent,
  RegisterComponent,
  PhotoGalleryComponent,
  HomeComponent,
  VideoGalleryComponent,
  FileUploadComponent
],
  imports: [
   // CommonModule,
    AppSharedModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class AppFeatureModule { }
