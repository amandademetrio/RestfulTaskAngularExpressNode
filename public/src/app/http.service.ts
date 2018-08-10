import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getTask(_id) {
    return this._http.get(`/tasks/${_id}`);
  }

  createTask(task) {
    return this._http.post('/tasks',task);
  }

  updateTask(task,_id) {
    return this._http.put(`/tasks/${_id}`,task);
  }

  deleteTask(_id) {
    return this._http.delete(`/tasks/${_id}`);
  }


}
