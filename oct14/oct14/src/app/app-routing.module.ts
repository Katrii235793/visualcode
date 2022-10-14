import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevtaskComponent } from './prevtask/prevtask.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path : 'second',component :SecondComponent},
  {path :'prevtask',component :PrevtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
