import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home'; 
import { PswPage } from '../psw/psw'; 



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  goSub(){
    this.navCtrl.push(RegisterPage);
  }

  goHome(){
    this.navCtrl.push(HomePage);
  }

  goFind(){
    this.navCtrl.push(PswPage);
  }
}
