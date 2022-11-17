import { Injectable } from '@angular/core';
import {Task} from "./task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, description: 'Laboratorio', completed: false},
    {id: 2, description: 'Sala', completed: true},
  ]

  constructor() { }

  getAll(): Task[] {
    return this.tasks;
  }
}
