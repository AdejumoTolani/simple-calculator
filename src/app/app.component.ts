import { Component, OnChanges} from '@angular/core';
import { KEY } from './keys/keys';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buffer:string = '';
  submit:string= '';
  keyReceived(key:KEY){
    if(key.type === "number" || key.type === "operand"){
      this.buffer += key.value
    }else{
      this.submit = eval(this.buffer)
    }
  }
}
