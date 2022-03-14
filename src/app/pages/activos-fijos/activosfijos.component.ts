import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-activosfijos',
  templateUrl: './activosfijos.component.html',
  styleUrls: ['./activosfijos.component.css']
})
export class ActivosfijosComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

}
