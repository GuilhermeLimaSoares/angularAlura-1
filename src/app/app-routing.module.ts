import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateThoughtComponent,
  },
  {
    path: 'listarPensamento',
    component: ListThoughtComponent,
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteThoughtComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
