import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-searc',
  templateUrl: './searc.component.html',
  styleUrls: ['./searc.component.css']
})
export class SearcComponent implements OnInit {

  query : string

  @Input() orderBy: any;
  @Input() orderType: string;

  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter();
  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }

  constructor() {
    this.query = ''
    this.orderType ='asc'
   }

  ngOnInit(): void {
  }

  handleSort(orderItems:any){
    this.orderBy = orderItems["orderBy"]
    this.orderType = orderItems["orderType"]

    this.orderEvt.emit(orderItems)
  }

}
