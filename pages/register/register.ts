import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { XieyiPage } from '../xieyi/xieyi';  

 
@Component({
  selector: 'page-login',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  goSub(){
    this.navCtrl.push(LoginPage);
  }

  goXieyi(){
    this.navCtrl.push(XieyiPage);
  }
}
