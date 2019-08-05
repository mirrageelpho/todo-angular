import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks:[]
  modal: boolean = false
  msgModal: string = ''
  taskItem: object = {}

  
  onCompleteTask(task){
    console.log(task)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    const newTaks = tasks.filter(tasks => tasks.id !== task.id)

    if(task.complete){
      task.complete = false;
      newTaks.unshift(task)

    }else{
      task.complete = true;
      newTaks.push(task)
    }

    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(newTaks));
    this.loadTasks()
    this.modal = false
  }

  onCloseModal(){
    this.modal = false
  }

  onShowModal(msg, task){
    this.msgModal = msg
    this.taskItem = task
    this.modal = true
  }

  loadTasks(){
    this.tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  constructor() { }

  ngOnInit() {
    this.loadTasks()
  }

}
