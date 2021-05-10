import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import {Child1Component} from './components/child1/child1.component';
import {Child2Component} from './components/child2/child2.component';
import {BlogComponent} from './components/blog/blog.component';
import {Page404Component} from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pagina', component: PaginaComponent, children: [
    {path: 'child1', component: Child1Component},
    {path: 'child2', component: Child2Component},
  ]},
  {path: 'blog', component: BlogComponent},
  {path: '**', component: Page404Component},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
