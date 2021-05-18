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
  },
  {
    path: 'campaigns-crud',
    loadChildren: () =>
      import('./pages/campaigns/crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'photoshoots-crud',
    loadChildren: () =>
      import('./pages/photoshoots/crud/crud.module').then((m) => m.CrudModule),
  },
  {
    path: 'customers-crud',
    loadChildren: () =>
      import('./pages/customers/crud/crud.module').then((m) => m.CrudModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
