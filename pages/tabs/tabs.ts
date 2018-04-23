import { Component } from '@angular/core';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { PersonPage } from '../person/person';
import { HomePage } from '../home/home';
import { FabuPage } from '../fabu/fabu';
import { XiaoxiPage } from '../xiaoxi/xiaoxi';
import { WodePage } from '../wode/wode';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FabuPage;
  // tab3Root = ContactPage;
  tab4Root = XiaoxiPage;
  tab5Root = WodePage;
  constructor() {

  }
}
