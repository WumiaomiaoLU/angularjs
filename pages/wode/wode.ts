import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
 
 
@Component({
  selector: 'page-wode',
  templateUrl: 'wode.html',
})
export class WodePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WodePage');
  }

  goSet(){
    this.navCtrl.push(SettingsPage);
  }

}
