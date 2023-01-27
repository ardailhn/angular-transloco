import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'about-us',
    loadChildren: () => import('src/app/pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path:'contact',
    loadChildren: () => import('src/app/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'our-products',
    loadChildren: () => import('src/app/pages/products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'gallery',
    loadChildren: () => import('src/app/pages/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
