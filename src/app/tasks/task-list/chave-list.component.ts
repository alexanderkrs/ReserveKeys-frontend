import { Component, OnInit } from '@angular/core';
import {ChaveService} from "../shared/chave.service";
import {Chave} from "../shared/chave";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './chave-list.component.html',
  styleUrls: ['./chave-list.component.css']
})
export class ChaveListComponent implements OnInit {
  chaves: any[] = [];

  constructor(private chaveService: ChaveService) { }

  ngOnInit(): void {
  }


}
