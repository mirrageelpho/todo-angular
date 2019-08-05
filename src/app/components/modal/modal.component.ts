import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() msgModal: string = ''
  @Input() taskItem: object = {}
  @Output() completeTask = new EventEmitter()
  @Output() closeModal = new EventEmitter()

  confirm(){
    console.log(this.taskItem)
    this.completeTask.emit(this.taskItem)
  }

  cancel(){
    console.log('cancel')
    this.closeModal.emit(false)
  }

  constructor() { }
  ngOnInit() {
  }

}
