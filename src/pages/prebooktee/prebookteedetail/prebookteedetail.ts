import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrebookteedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prebookteedetail',
  templateUrl: 'prebookteedetail.html',
})
export class PrebookteedetailPage {
  selectedItem: any;
  passedData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.passedData = navParams;
  }

  ionViewDidLoad() {
    console.log(this.passedData);
    // console.log('ionViewDidLoad PrebookteedetailPage');
    // this.selectedItem = navParams.get('item');
  }

}
