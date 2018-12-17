import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prebooktee',
  templateUrl: './prebooktee.page.html',
  styleUrls: ['./prebooktee.page.scss'],
})
export class PrebookteePage implements OnInit {

    teetimes = [
        {
            name: "Northview-Ridge球场",
            about: "Northview Golf and Country Club - Ridge",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月2日 星期日",
            imgUrl :"https://www.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/l/-/l-846034014572_1.jpg"
        },
        {
            name: "天鹅海湾度假乡村俱乐部 — 度假村球场",
            about: "Swan-e-set Bay Resort & Country Club - Resort",
            regularPrice : 33,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月4日 星期二",
            imgUrl :"https://www.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/l/-/l-846034014572_1.jpg"
        },
        {
            name: "Meadow Gardens球场",
            about: "Meadow Gardens Golf Course",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月5日 星期三",
            imgUrl :"https://www.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/l/-/l-846034014572_1.jpg"
        },
        {
            name: "Hazelmere球场",
            about: "Hazelmere Country Club",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月6日 星期四",
            imgUrl :"https://www.hmart.com/media/catalog/product/cache/4a29384b44aa82bd9906cfa705b6f349/l/-/l-846034014572_1.jpg"
        }
    ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  teeClicked(tee){
    console.log(tee);
  }
}
