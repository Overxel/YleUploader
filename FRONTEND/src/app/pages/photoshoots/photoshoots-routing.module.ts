import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoshootsComponent } from './photoshoots.component';

const routes: Routes = [{ path: '', component: PhotoshootsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoshootsRoutingModule { }
