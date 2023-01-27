import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_LOADING_TEMPLATE, TRANSLOCO_SCOPE } from '@ngneat/transloco';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule
  ],
  declarations: [HomeComponent],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: '' },
    {
      provide: TRANSLOCO_LOADING_TEMPLATE,
      useValue: `<span id="default-loading-template">Loading template...</span>`
    }
  ],
})
export class HomeModule { }
