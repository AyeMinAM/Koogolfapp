import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prebooktee-list',
  templateUrl: './prebooktee-list.page.html',
  styleUrls: ['./prebooktee-list.page.scss'],
})
export class PrebookteeListPage implements OnInit {

  items = [
        {
            name: "Northview-Ridge球场",
            about: "Northview Golf and Country Club - Ridge",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月2日 星期日",
        },
        {
            name: "天鹅海湾度假乡村俱乐部 — 度假村球场",
            about: "Swan-e-set Bay Resort & Country Club - Resort",
            regularPrice : 33,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月4日 星期二",
        },
        {
            name: "Meadow Gardens球场",
            about: "Meadow Gardens Golf Course",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月5日 星期三",
        },
        {
            name: "Hazelmere球场",
            about: "Hazelmere Country Club",
            regularPrice : 55,
            memberPrice : 45,
            savePercentage : 10,
            date: "2018年12月6日 星期四",
        }
    ]

  constructor() { }

  ngOnInit() {
  }

  itemTapped(item) {

  }
}
