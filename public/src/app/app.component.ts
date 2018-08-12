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
  constructor(private _httpService: HttpService) { };

  ngOnInit(): void {
  }

  getTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
    })
  }

  getTask(task) {
    task.show = true;
  }

}
