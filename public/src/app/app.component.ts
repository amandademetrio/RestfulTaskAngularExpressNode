import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amanda';
  tasks = [];
  show = false;
  newTask = {};
  showmore = "Show More"
  constructor(private _httpService: HttpService) { };

  ngOnInit(): void {
    this.newTask = {title: "", description: ""};
  }

  getTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
    })
  }

  getTask(task) {
    if (task.show) {
      task.show = false;
      this.showmore = "Show More"
    }
    else {
      task.show = true;
      this.showmore = "Show Less"
    }
  }

  showEdit(task) {
    task.edit = true;
  }

  addTask() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("got data from post back",data)
      this.newTask = { title: "", description: "" }
      this.getTasks();
    })
  }

  deleteTask(task) {
    let observable = this._httpService.deleteTask(task._id)
    observable.subscribe(data => {
    console.log("Deleted the task")
    this.getTasks();
    })
  }

  editTask(task) {
    let observable = this._httpService.updateTask(task,task._id);
    observable.subscribe(data => {
      console.log("Edited the following task",task)
      this.getTasks();
    }
    )
  }

}
