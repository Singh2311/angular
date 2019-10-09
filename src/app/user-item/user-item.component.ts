import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
// name:string;
@Input() name:string;  //adding input annotation
  constructor() {
    // this.name="sumit";
   }

  ngOnInit() {
  }

}
