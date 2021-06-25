import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { without, findIndex } from 'lodash';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  theList: Array<any> = [];
  theModifiedList: Array<any> = [];

  orderBy: string;
  orderType: string;
  lastIndex: number = 0;

  constructor(private http: HttpClient){
    this.orderBy = 'petName';
    this.orderType = 'desc';
  }

  ngOnInit() : void {
    this.http.get<object[]>('../assets/data.json').subscribe(data => {
      this.theList = data.map((item: any) => {
        item.aptId = this.lastIndex
        return item
      })
      this.theModifiedList = data
    })
  }

  deleteApt(item: any){
    this.theList = without(this.theList, item)
    this.theModifiedList = without(this.theList, item)
  }

  addNewApt(item: any){
    item.aptId = this.lastIndex
    this.theList.unshift(item)
    this.theModifiedList.unshift(item)
    this.lastIndex++
  }

  searchApt(theQuery: string){
    this.theModifiedList = this.theList.filter(eachItem => {

      return (
        eachItem['petName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['ownerName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(theQuery.toLowerCase())
      );
    });
    this.sortItems()
  }

  sortItems() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }
    this.theModifiedList.sort((a, b) => {
      if (
        a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()
      ) {
        return -1 * order;
      }
      if (
        a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()
      ) {
        return 1 * order;
      }
      return 0 * order
    });
  }

  orderByHande(orderItems: any){
    console.log(orderItems)
    this.orderBy = orderItems.orderBy
    this.orderType = orderItems.orderType
    this.sortItems()
  }

  updateApt(aptInfo: any){
    let aptIndex: number;
    let modifiedIndex: number;

    aptIndex = findIndex(this.theList, {
      aptId: aptInfo.theApt.aptId
    });
    modifiedIndex = findIndex(this.theModifiedList, {
      aptId: aptInfo.theApt.aptId
    });

    this.theList[aptIndex][aptInfo.labelName] = aptInfo.newValue;
    this.theModifiedList[modifiedIndex][aptInfo.labelName] =
      aptInfo.newValue;
  }
}
