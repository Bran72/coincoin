import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

import { SignupPage } from "../signup/signup";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

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
