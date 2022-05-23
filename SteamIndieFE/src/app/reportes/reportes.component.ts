import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface Tab {
  label: string;
  tipo: number;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  asyncTabs: Observable<Tab[]>
  public tabSelected
  estados
  public tipo = 1
  constructor() { }

  ngOnInit(): void {
  }
  onTabChanged = async ($event) => {

  }
}
