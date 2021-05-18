import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploaderRoutingModule } from './image-uploader-routing.module';
import { ImageUploaderComponent } from './image-uploader.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    ImageUploaderRoutingModule,
    ButtonsModule.forRoot()
  ]
})
export class ImageUploaderModule { }
