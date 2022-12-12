import { LandingpageComponent } from './../pages/examples/landingpage/landingpage.component';
import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from '../pages/examples/profilepage/profilepage.component';
import { IndexComponent } from '../pages/index/index.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: IndexComponent
      },
      {
        path: 'profile',
        component: ProfilepageComponent,
      },
      {
        path: 'donate',
        component: LandingpageComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    PagesModule
  ]
})
export class LayoutRoutingModule {
  static components = [ LayoutComponent ]
 }
