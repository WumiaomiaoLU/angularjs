import { Component } from '@angular/core';
import {   NavController  } from 'ionic-angular';
import { ChatPage } from '../chat/chat'; 

 
@Component({
  selector: 'page-xiaoxi',
  templateUrl: 'xiaoxi.html',
})
export class XiaoxiPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XiaoxiPage');
  }

  goChat(){
    this.navCtrl.push(ChatPage);
  }
}
