import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestHomeComponent } from './test-home/test-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },{
    path: 'test',
    component: TestHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
