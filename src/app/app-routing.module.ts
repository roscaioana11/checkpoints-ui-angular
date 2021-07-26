import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsPageComponent} from "./pages/students-page/students-page.component";
import {CheckpointsPageComponent} from "./pages/checkpoints-page/checkpoints-page.component";

const routes: Routes = [
  {path: "students", component: StudentsPageComponent},
  {path: "checkpoints", component: CheckpointsPageComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
