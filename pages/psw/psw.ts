import { Component } from '@angular/core';
import {  NavController  } from 'ionic-angular';
import { LoginPage } from '../login/login'
 
@Component({
  selector: 'page-psw',
  templateUrl: 'psw.html',
})
export class PswPage {

  constructor(public navCtrl: NavController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PswPage');
  }
  
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
}
