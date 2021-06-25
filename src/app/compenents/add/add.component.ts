import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  showForm : boolean;

  @Output() addEvt = new EventEmitter() 
  constructor() {
      this.showForm = true
   }

  ngOnInit(): void {
  }

  toggleAptDisplay(){
    this.showForm = !this.showForm
  }

  saveApt(formInfo : any){
    console.log(formInfo)
    const tempItem = {
      petName: formInfo.petName,
      ownerName: formInfo.ownerName,
      aptNotes: formInfo.aptNotes,
      aptDate: formInfo.aptDate + ' ' + formInfo.aptTime
    }

    this.addEvt.emit(tempItem)
    this.showForm = !this.showForm
  }

}
