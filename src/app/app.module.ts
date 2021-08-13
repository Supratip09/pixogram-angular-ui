import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared.module';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { PhotoGalleryComponent } from './feature/photo-gallery/photo-gallery.component';
import { HomeComponent } from './feature/home/home.component';
import { VideoGalleryComponent } from './feature/video-gallery/video-gallery.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './feature/file-upload/file-upload.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PhotoGalleryComponent,
    HomeComponent,
    VideoGalleryComponent,
    FileUploadComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppSharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
