import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountProvider} from "../../providers/account/account";

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public accountProvider: AccountProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

  testLogin(){
    this.accountProvider.fakeLogin()
  }

}
