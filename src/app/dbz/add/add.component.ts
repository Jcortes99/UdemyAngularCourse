import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewChar } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() newchar: NewChar = {
    name: '',
    power: 0
  };
  @Output() onNewCharacter: EventEmitter<NewChar> = new EventEmitter();
  public add(){
    if(this.newchar.name.trim().length === 0){return;}
    this.onNewCharacter.emit(this.newchar);
    this.newchar = {
      name: '',
      power: 0
    }
  }
}
