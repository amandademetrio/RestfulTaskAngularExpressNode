import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amanda';
  tasks = [];
  constructor(private _httpService: HttpService) { };

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['tasks'];
    })
  }

  getTask(_id) {
    let observable = this._httpService.getTask(_id);
    observable.subscribe(data => {
      console.log(data);
    })
  }
}
