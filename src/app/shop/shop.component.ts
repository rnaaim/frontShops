import { Component, OnInit } from '@angular/core';
import {shops} from '../data';
import {Shop} from '../shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
   myshops = shops;
  constructor() { }

  ngOnInit() {
    console.log(this.myshops);
  }

}
