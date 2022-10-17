import { Component, OnInit } from '@angular/core';
import { NewChar } from '../interfaces/dbz.interface';
@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {

  constructor() { };

  ngOnInit(): void {
  };
  public characters:NewChar[] = [
    {name:'goku',power:2},
  ];
  newchar: NewChar ={
    name: 'Boo',
    power: 10000
  }
  add(char:NewChar) {
    console.log(char)
    this.characters.push(char)
  }
}