import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: 'uploader',
    loadChildren: () =>
      import('./pages/image-uploader/image-uploader.module').then(
        (m) => m.ImageUploaderModule
      ),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'photoshoots',
    loadChildren: () =>
      import('./pages/photoshoots/photoshoots.module').then(
        (m) => m.PhotoshootsModule
      ),
  },
  {
    path: 'campaigns',
    loadChildren: () =>
      import('./pages/campaigns/campaigns.module').then(
        (m) => m.CampaignsModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
