import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

import { SigninPage } from "../signin/signin";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoHome() {
    this.navCtrl.setRoot(TabsPage)
  }

  gotoSignIn(){
    this.navCtrl.setRoot(SigninPage);
  }

  gotoSignUp(){
    this.navCtrl.setRoot(SignupPage);
  }

}
