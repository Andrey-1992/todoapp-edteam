import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskPageComponent } from './page/task-page.component';

//http:localhost:4200/task/
const routes: Routes = [ 
  {
    path:'',
    component: TaskPageComponent
  },
  {
    path:'header',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
