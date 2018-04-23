import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubpagePage } from '../subpage/subpage';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  items = []; 

  constructor(public navCtrl: NavController) {   
    for (let i = 0; i < 3; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      console.log(this.items);
      infiniteScroll.complete();
      // if (this.items.length > 9) {
      //   infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
      // }
      }, 500);
  }

  list="infos";

  goSub(){
    this.navCtrl.push(LoginPage,{name:'liu'});
  }
}

 
 
 

 
