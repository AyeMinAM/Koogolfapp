import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items = [
    {
      name: "uniersity golf club",
      about: "club at ubc",
      regularPrice : 55,
      memberPrice : 45,
      savePercentage : 10,
      date: "2018年12月2日 星期日",
    },
    {
      name: "uniersity golf club",
      about: "club at ubc",
      regularPrice : 55,
      memberPrice : 45,
      savePercentage : 10,
      date: "2018年12月2日 星期日",
    },
    {
      name: "uniersity golf club",
      about: "club at ubc",
      regularPrice : 55,
      memberPrice : 45,
      savePercentage : 10,
      date: "2018年12月2日 星期日",
    },
    {
      name: "uniersity golf club",
      about: "club at ubc",
      regularPrice : 55,
      memberPrice : 45,
      savePercentage : 10,
      date: "2018年12月2日 星期日",
    }

  ]
  constructor(public navCtrl: NavController) {

  }

}

