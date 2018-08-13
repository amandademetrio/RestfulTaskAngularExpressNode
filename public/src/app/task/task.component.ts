import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() tasktoShow: any;

  constructor() { }

  ngOnInit() {
    console.log("currently inside task is ",this.tasktoShow)
  }

}
