import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})



export class TodoFormComponent implements OnInit {

  tasks = []


  constructor() { 
  }

  create(title){
    if(title === '' || title === null || title === undefined){
      alert('Campo obrigatório')
      return null
    }
    let hash = (+new Date).toString(36)
    
    this.tasks.unshift({id: hash, title:title, complete: false})
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('tasks'))) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
  }

}
