import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private fieldArray: Array<any> = [];
  private getFieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
    this.fieldArray = JSON.parse(localStorage.getItem('samiksha')  || '[]' );
    this.fieldArray.push(this.newAttribute);
      this.newAttribute = {};
      localStorage.setItem('samiksha', JSON.stringify(this.fieldArray));
      this.getInitDetails();
  }
  private getInitDetails() {
    this.getFieldArray = JSON.parse(localStorage.getItem('samiksha')  || '[]' );
    console.log('this------------->>>', this.getFieldArray);
    return this.getFieldArray;
  }
   deleteFieldValue(index) {
    localStorage.removeItem(index);
  }


  constructor() { }

  ngOnInit() {
    this.getInitDetails();
  }

}
