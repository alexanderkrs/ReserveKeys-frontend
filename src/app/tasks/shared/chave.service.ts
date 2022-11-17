import { Injectable } from '@angular/core';
import {Chave} from "./chave";

@Injectable({
  providedIn: 'root'
})
export class ChaveService {

  tasks: Chave[] = [
    {id: 1, description: 'Laboratorio', completed: false},
    {id: 2, description: 'Sala', completed: true},
  ]

  constructor() { }

  getAll(): Chave[] {
    return this.tasks;
  }
}
