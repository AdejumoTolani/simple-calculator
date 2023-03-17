import { Component, Output, EventEmitter } from '@angular/core';
import { KEY } from './keys';
@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent {
  keys:KEY[]=[{
    value: "0",
    type: "number"
  },
  {
    value: "1",
    type: "number"
  },
  {
    value: "2",
    type: "number"
  },
  {
    value: "3",
    type: "number"
  },
  {
    value: "4",
    type: "number"
  },
  {
    value: "5",
    type: "number"
  },
  {
    value: "6",
    type: "number"
  },
  {
    value: "7",
    type: "number"
  },
  {
    value: "8",
    type: "number"
  },
  {
    value: "9",
    type: "number"
  },
  {
    value: "+",
    type: "operand"
  },
  {
    value: "-",
    type: "operand"
  },
  {
    value: "/",
    type: "operand"
  },
  {
    value: "*",
    type: "operand"
  },
  {
    value: "=",
    type: "sOp"
  }]
 @Output() keyClicked = new EventEmitter();
  onClick(f:KEY){
    this.keyClicked.emit(f)
  }
}
