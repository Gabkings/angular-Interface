import { Component, Input, Output, EventEmitter } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


library.add(faTimes)

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {

  @Input() appList: any; 

  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleDelete(item : object) {
      this.deleteEvent.emit(item)
  }

  handleUpdate(theApt: object, labelName: string, newValue: string) {
    this.updateEvt.emit({
      theApt: theApt,
      labelName: labelName,
      newValue: newValue
    });
  }
  

}
