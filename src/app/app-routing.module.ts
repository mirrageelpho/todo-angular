import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//pages
import { TodoListComponent } from './pages/todo-list/todo-list.component'
import { TodoFormComponent } from './pages/todo-form/todo-form.component'

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TodoListComponent },
  { path: 'create-task', component: TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
