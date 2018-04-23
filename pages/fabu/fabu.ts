import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';

 
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {

  constructor(public navCtrl: NavController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabuPage');
  }
  
  goInfo(){
    this.navCtrl.push(InfoPage);
  }
}
