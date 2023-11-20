import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit{
  name: string = "Mustafa";
  age: number = 30;
  job = "programmer";
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "Pollo",
    year: 2019
  }

  constructor() {}

  ngOnInit(): void {}
}
