import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from '../delete/delete/delete.component';
import { EditComponent } from '../edit/edit/edit.component';
import { ListAllComponent } from '../listAll/list-all/list-all.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'bruna', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path:'delete', component: DeleteComponent},
  {path:'listAll', component: ListAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
